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
    $('.card-deck').append($('<div />', {
        id: `card-${i}`,
        class: 'card mainCard' 
    }))
    $(`#card-${i}`).append($('<div />',{
        id: `cardImg-${i}`,
        class: 'card-img',
        style: 'background-image:url(./food3.jpg)'
    }))
    $(`#cardImg-${i}`).append($('<div />', {
        id: `overCard-${i}`,
        class: 'overlay'
    }))
    $(`#overCard-${i}`).append($('<div />', {
        id: `overContent-${i}`,
        class: 'overlay-content'
    }))
    $(`#overContent-${i}`).append($('<a />', {
        class: 'hover',
        href: '#',
        text: 'View'
    }))
    $(`#card-${i}`).append($('<div />', {
        id: `cardBody-${i}`,
        class: 'card-body card-body-cascade'
    }))
    $(`#cardBody-${i}`).append($('<h4 />', {
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