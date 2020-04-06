var addCard = {}
var Ingredients = []
let counterLines = 1

$('#userName').text(sessionStorage.userName);

$('#Img').on('change',function(){
    //get the file name
    var fileName = $('#Img')[0].files[0].name;

    //replace the "Choose a file" label
    $('#photo').text(fileName);
})

$('#saveBtn').click(function() {
    IngredientsList()
    creatNewRecipe()
    showRecipePage('33')

})

function creatNewRecipe(){
    var file = $('#Img')[0].files[0];
    var reader = new FileReader();
    var img;
    reader.onload = function (e) {
        img =  (e.target.result).toString('base64')
        addCard = {
            userID: sessionStorage.userID,
            id: '33',
            Name: $('#Name').val(),
            Description: $('#Description').val(),
            TimeHours: $('#Hours').val(),
            TimeMinutes: $('#Minutes').val(),
            Ingredients: Ingredients,
            Preparation: $('#Preparation').val(),
            Img: img
        }
        $.post('/api/add',addCard, function (data,status){
            console.log(addCard)
            console.log(status)
           
        }).done(function() { console.log(status) })
        .fail(function(jqxhr, settings, ex) { alert('failed, ' + ex); });

    };
    reader.readAsDataURL(file);
}

function IngredientsList(){
    var matched = $(".group")
    var rowIndex
    for (let i = 0; i < matched.length ; i++){
        rowIndex = matched[i].id.split('-')[1] 
        Ingredients.push({
            Amount: $(`#amount-${rowIndex}`).val(),
            Unit: $(`#unit-${rowIndex}`).val(),
            Item: $(`#item-${rowIndex}`).val()
        })
    }

}

$("#addRow").click(function () {

    $('#inputFormRow').append($('<div />', {
        class: 'input-group mb-3 group',
        id: `group-${counterLines}`
    }))
    $(`#group-${counterLines}`).append($('<input />', {
        type: 'number',
        id: `amount-${counterLines}`,
        class: 'form-control m-input',
        placeholder: 'Amount', 
        autocomplete: 'off',
        step: '0.25',
        min: '0', 
        max: '1000'
    }))
    $(`#group-${counterLines}`).append($('<input />', {
        type: 'text',
        id: `unit-${counterLines}`,
        class: 'form-control m-input',
        placeholder: 'Unit', 
        autocomplete: 'off'
    }))
    $(`#group-${counterLines}`).append($('<input />', {
        type: 'text',
        id: `item-${counterLines}`,
        class: 'form-control m-input',
        placeholder: 'Item', 
        autocomplete: 'off'
    }))
    $(`#group-${counterLines}`).append($('<div />', {
        class: 'input-group-append',
        id: `groupBtn-${counterLines}`
    }))
    $(`#groupBtn-${counterLines}`).append($('<button />', {
        class: 'btn btn-danger remove',
        id: `btn-${counterLines}`,
        type: 'button',
        text: 'Remove'
    }))
    counterLines++
});

    // remove row
    $(document).on('click', '.remove', function () {
        $(this).parents('.group').remove();
    });

//# sourceURL=add.js