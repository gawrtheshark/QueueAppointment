let base_url = 'http://0.0.0.0:8000/api'
let results = ['Mark', 'Peter', 'Larry'];
let $FirstLadyAddButton = $('#FirstLady>.input-group>.input-group-btn>.btn-success');
let $StrategyAddButton = $('#Strategy>.input-group>.input-group-btn>.btn-success');
let $DefenseAddButton = $('#Defense>.input-group>.input-group-btn>.btn-success');
let $ConstructAddButton = $('#Construct>.input-group>.input-group-btn>.btn-success');
let $TechniqueAddButton = $('#Technique>.input-group>.input-group-btn>.btn-success');
let $InteriorAddButton = $('#Interior>.input-group>.input-group-btn>.btn-success');

function load_table(ministry) {
    let InsertedInnerHtml = '';
    for (let $i = 1; $i < results.length + 1; $i++) {

        let order_user_block = `
            <tr>
                <th scope="row">${$i}</th>
                <td>${results[$i - 1]}</td>
            </tr>
        `
        InsertedInnerHtml += order_user_block
    }

    $(`#${ministry}>.table-responsive>table>tbody`)[0].innerHTML = InsertedInnerHtml;
}

$(function () {
    $FirstLadyAddButton.click(function () {
        let input_text = $('#FirstLady>.input-group>input')[0].value;
        console.log(input_text);
    })
    $StrategyAddButton.click(function () {
        let input_text = $('#Strategy>.input-group>input')[0].value;
        console.log(input_text);
    })
    $DefenseAddButton.click(function () {
        let input_text = $('#Defense>.input-group>input')[0].value;
        console.log(input_text);
    })
    $ConstructAddButton.click(function () {
        let input_text = $('#Construct>.input-group>input')[0].value;
        console.log(input_text);
    })
    $TechniqueAddButton.click(function () {
        let input_text = $('#Technique>.input-group>input')[0].value;
        console.log(input_text);
    })
    $InteriorAddButton.click(function () {
        let input_text = $('#Interior>.input-group>input')[0].value;
        console.log(input_text);
    })
    // let get_all_url = base_url + '/all';
    // $.ajax({
    //     method: "GET",
    //     headers: {
    //         'Accept': 'text/html,application/xhtml+xml,application/xml',
    //     },
    //     url: get_all_url,
    //     dataType: "json",
    //     async: false,
    //     success: function (data) {
    //         // $("#row-text-data").empty();
    //         console.log(data);
    //         // let $category = data['category'];
    //         // let $tag = data['tag'];
    //         // let $id = data['text_id'];
    //         // let $text = data['text'];
    //         // let $textbar = `
    //         // <div id="row-text-data-id" data-id="${$id}">
    //         // <h3>${$category}</h3>
    //         // <span class="badge badge-info">${$tag}</span>
    //         // </div>`;

    //         // $("#row-text-data").append($textbar);
    //         // $("#row-tex-p").text($text);

    //     },
    //     error: function () {
    //         // alert("get_document error ajax");
    //         // console.log("---");
    //         console.log("get_document error ajax");
    //         // console.log("---");
    //     },
    // })
    // load_table("FirstLady");
})


