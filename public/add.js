var addCard = {}

$('#Img').on('change',function(){
    //get the file name
    var fileName = $('#Img')[0].files[0].name;

    //replace the "Choose a file" label
    $('#photo').text(fileName);
})

$('#saveBtn').click(function() {
    console.log("here")
    creatNewRecipe()
    $.post('/api/add',addCard, function (){
    console.log(addCard)
})
})

function creatNewRecipe(){
    addCard = {
        id: '51',
        Name: $('#Name').val(),
        Description: $('#Description').val(),
        TimeHours: $('#Hours').val(),
        TimeMinutes: $('#Minutes').val(),
        Preparation: $('#Preparation').val()}
}



