let base_url = 'https://queueappointment-2.onrender.com/api'
// let results = ['Mark', 'Peter', 'Larry'];
let $FirstLadyAddButton = $('#FirstLady>.input-group>.input-group-btn>.btn-success');
let $StrategyAddButton = $('#Strategy>.input-group>.input-group-btn>.btn-success');
let $DefenseAddButton = $('#Defense>.input-group>.input-group-btn>.btn-success');
let $ConstructAddButton = $('#Construct>.input-group>.input-group-btn>.btn-success');
let $TechniqueAddButton = $('#Technique>.input-group>.input-group-btn>.btn-success');
let $InteriorAddButton = $('#Interior>.input-group>.input-group-btn>.btn-success');
// pop
let $FirstLadyPopButton = $('#FirstLady>.input-group>.input-group-btn>.btn-danger');
let $StrategyPopButton = $('#Strategy>.input-group>.input-group-btn>.btn-danger');
let $DefensePopButton = $('#Defense>.input-group>.input-group-btn>.btn-danger');
let $ConstructPopButton = $('#Construct>.input-group>.input-group-btn>.btn-danger');
let $TechniquePopButton = $('#Technique>.input-group>.input-group-btn>.btn-danger');
let $InteriorPopButton = $('#Interior>.input-group>.input-group-btn>.btn-danger');


function load_table(ministry, results) {
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

function add_user_to_ministry(ministry) {
    let $user = $(`#${ministry}>.input-group>input`)[0].value;
    let add_url = base_url + '/add';
    var body = {
        user: $user,
        ministry: ministry
    }
    $.ajax({
        type: "POST",
        url: add_url,
        data: { 'data': JSON.stringify(body) },
        async: false,
        success: function (response) {
            location.reload();
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    })
}

function pop_user_from_ministry(ministry) {
    let add_url = base_url + '/pop';
    var body = {
        ministry: ministry
    }
    $.ajax({
        type: "POST",
        url: add_url,
        async: false,
        data: { 'data': JSON.stringify(body) },
        success: function (response) {
            location.reload();
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    })
}


$(function () {
    $FirstLadyAddButton.click(function () { add_user_to_ministry("FirstLady") });
    $StrategyAddButton.click(function () { add_user_to_ministry("Strategy") });
    $DefenseAddButton.click(function () { add_user_to_ministry("Defense") });
    $ConstructAddButton.click(function () { add_user_to_ministry("Construct") });
    $TechniqueAddButton.click(function () { add_user_to_ministry("Technique") });
    $InteriorAddButton.click(function () { add_user_to_ministry("Interior") });

    // pop

    $FirstLadyPopButton.click(function () { pop_user_from_ministry("FirstLady") });
    $StrategyPopButton.click(function () { pop_user_from_ministry("Strategy") });
    $DefensePopButton.click(function () { pop_user_from_ministry("Defense") });
    $ConstructPopButton.click(function () { pop_user_from_ministry("Construct") });
    $TechniquePopButton.click(function () { pop_user_from_ministry("Technique") });
    $InteriorPopButton.click(function () { pop_user_from_ministry("Interior") });

    let get_all_url = base_url + '/all';
    $.ajax({
        method: "GET",
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml',
        },
        url: get_all_url,
        dataType: "json",
        async: false,
        success: function (data) {
            load_table("FirstLady", data['FirstLady']);
            load_table("Strategy", data['Strategy']);
            load_table("Defense", data['Defense']);
            load_table("Construct", data['Construct']);
            load_table("Technique", data['Technique']);
            load_table("Interior", data['Interior']);
        },
        error: function () {
            console.log("get_document error ajax");
        },
    })

})


