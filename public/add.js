var addCard = {}
$('#userName').text(sessionStorage.userName);

$('#Img').on('change',function(){
    //get the file name
    var fileName = $('#Img')[0].files[0].name;

    //replace the "Choose a file" label
    $('#photo').text(fileName);
})

$('#saveBtn').click(function() {
    creatNewRecipe()
})

function creatNewRecipe(){
    var file = $('#Img')[0].files[0];
    var reader = new FileReader();
    var img;
    reader.onload = function (e) {
        img =  (e.target.result).toString('base64')
        addCard = {
            id: '153',
            Name: $('#Name').val(),
            Description: $('#Description').val(),
            TimeHours: $('#Hours').val(),
            TimeMinutes: $('#Minutes').val(),
            Preparation: $('#Preparation').val(),
            Img: img
        }
        $.post('/api/add',addCard, function (){
            console.log(addCard)
        })

    };
    reader.readAsDataURL(file);

    
}
