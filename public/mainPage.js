  $.get("api/all", function (data) {
      const maxCard = 3
    for (var i = 0; i < data.length && i < maxCard; i++) {
        mainPageCards(i,data)
    }
})

$('#logout').click(function () {
    sessionStorage.removeItem("userConnect");
});

function mainPageCards(i, data){
    var id_number = data[i]['id'];
    $('.card-deck').append($('<div />', {
        id: `card-${id_number}`,
        class: 'card mainCard' 
    }))
    $(`#card-${id_number}`).append($('<div />',{
        id: `cardImg-${id_number}`,
        class: 'card-img',
        style: 'background-image:url(./food3.jpg)'
    }))
    $(`#cardImg-${id_number}`).append($('<div />', {
        id: `overCard-${id_number}`,
        class: 'overlay'
    }))
    $(`#overCard-${id_number}`).append($('<div />', {
        id: `overContent-${id_number}`,
        class: 'overlay-content'
    }))
    $(`#overContent-${id_number}`).append($('<a />', {
        class: 'hover',
        href: 'oneRecipe.html' + '#' + id_number,
        text: 'View'
    }))
    $(`#card-${id_number}`).append($('<div />', {
        id: `cardBody-${id_number}`,
        class: 'card-body card-body-cascade'
    }))
    $(`#cardBody-${id_number}`).append($('<h4 />', {
        class: 'font-weight-bold card-title',
        text: data[i]['name']
    })).append($('<p />', {
        class: 'card-text',
        text: data[i]['text']
    }))

}

function disableSubmit(){
    
    if(sessionStorage.userConnect != "true"){
        window.location.href = "http://localhost:8080/loginPage.html";
    }
}