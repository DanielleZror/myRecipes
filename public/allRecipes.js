var user_id = {'userID': sessionStorage.userID}

$.get("api/all", user_id , function (data) {
    allCards(data)
})

function allCards(data){ 
    for(let j= 0; j <  data.length; j++){
        var id_number = data[j]['_id'];
        $(`.container`).append($('<div />', {
            id: `card-${id_number}`,
            class: 'card'
        }))
        $(`#card-${id_number}`).append($('<div />',{
            id: `cardImg-${id_number}`,
            class: 'card-img',
            style: `background-image:url(${data[j]['Img']})`
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
            onclick: `showRecipePage("${id_number}")`,
            text: 'View'
        }))
        $(`#card-${id_number}`).append($('<div />', {
            id: `cardBody-${id_number}`,
            class: 'card-body card-body-cascade'
        }))
        $(`#cardBody-${id_number}`).append($('<h4 />', {
            class: 'font-weight-bold card-title',
            text: data[j]['Name']
        })).append($('<p />', {
            class: 'card-text',
            text: data[j]['Description']
        }))
    }
}

function disableSubmit(){
    if(sessionStorage.userConnect != "true"){
        window.location.href = "/loginPage.html";
    } else {
        window.location.href = 'loadingPage.html'
    }
}