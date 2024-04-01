from flask import Flask, jsonify, render_template, request
from flask_cors import CORS, cross_origin
from redis import Redis

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
redis_client = Redis.from_url(
    "rediss://red-co56nt21hbls73cbphgg:"
    "hi249uAlRv5DFpHa1EyyhxZAO88cBsB3@singapore-redis.render.com:6379"
)


@app.route("/")
@cross_origin()
def index() -> str:
    return render_template('index.html')


class Ministry:
    FirstLady = 'FirstLady'
    Strategy = 'Strategy'
    Defense = 'Defense'
    Construct = 'Construct'
    Technique = 'Technique'
    Interior = 'Interior'
    MINISTRY_KEYS = [
        'FirstLady',
        'Strategy',
        'Defense',
        'Construct',
        'Technique',
        'Interior',
    ]


def user_exists(user) -> bool:
    for key in Ministry.MINISTRY_KEYS:
        if user in redis_client.lrange(key, 0, -1):
            return True
    return False


@app.route('/add', methods=['POST'])
def add_user():
    data: dict | None = request.json
    if not data:
        return jsonify({'error': 'Invalid body'}), 422

    user = data.get('user')
    ministry = data.get('ministry')

    if not (user and ministry):
        return jsonify({'error': 'User not provided'}), 400

    if ministry not in Ministry.MINISTRY_KEYS:
        return jsonify({'error': 'Ministry not provided'}), 400

    if user_exists(user):
        return jsonify({'error': 'User already exists in a queue/list'}), 400

    redis_client.rpush(ministry, user)

    return None, 201


@app.route('/all', methods=['GET'])
def show_all_lists():
    all_lists = {}
    for key in Ministry.MINISTRY_KEYS:
        all_lists[key] = redis_client.lrange(key, 0, -1)
    return jsonify(all_lists), 200


@app.route('/pop', methods=['DELETE'])
def pop_user():
    for key in Ministry.MINISTRY_KEYS:
        user = redis_client.lpop(key)
        if user:
            return jsonify({'message': f'User {user} popped from {key} queue'}), 200

    return jsonify({'error': 'All ministry queues are empty'}), 400


if __name__ == '__main__':
    app.run(debug=True)
