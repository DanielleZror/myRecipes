var exsits = false;
var user_id = {'userID': sessionStorage.userID}

 $.get("api/all",user_id, function (data) {
      const maxCard = 3
    for (var i = 0; i < data.length && i < maxCard; i++) {
        mainPageCards(i,data)
    }
    for (var j = 0; j < data.length && j < maxCard; j++) {
        carousel(j,data)
    }
})

$('#logout').click(function () {
    sessionStorage.removeItem("userConnect");
});

function carousel(j, data){
    $('#carousel').append($('<ol />,', {
        id: 'indicators',
        class: 'carousel-indicators'
    }))

    slides(j)

    $('#carousel').append($('<div />,', {
        id: 'carousel-inner',
        class: 'carousel-inner'
    }))

    carouselInner(j, data)
    if(j > 0 && exsits == false){
        nextAndPrevBtn()
    }

}


function nextAndPrevBtn(){
    exsits = true;
    $('#carousel').append($('<a />,', {
        id: 'control-prev',        
        class: 'carousel-control-prev',
        href: '#carousel',
        role: 'button',
        'data-slide':'prev'
    }))
    $('#control-prev').append($('<span />', {
        class: 'carousel-control-prev-icon',
        'aria-hidden': 'true'  
    }))
    $('#control-prev').append($('<span />', {
        class: 'sr-only',
        text: 'Previous'
    }))
    $('#carousel').append($('<a />,', {
        id: 'control-next',
        class: 'carousel-control-next',
        href: '#carousel',
        role: 'button',
        'data-slide': 'next'
    }))
    $('#control-next').append($('<span />', {
        class: 'carousel-control-next-icon',
        'aria-hidden': 'true' 
    }))
    $('#control-next').append($('<span />', {
        class: 'sr-only',
        text: 'Next'
    }))
}
function slides(j){
    var carouselSlideClass = (j == 0) ? "active" : ""
    $('#indicators').append($('<li />',{
        class: carouselSlideClass,
        'data-target':'#carousel',
        'data-slide-to': j
    } ))
}
function carouselInner(j, data){
    var carouselItemClass = (j == 0) ? "carousel-item active" : "carousel-item"
    $('#carousel-inner').append($('<div />', {
        class: carouselItemClass,
        id: `carousel-item-${j}`
    }))
    $(`#carousel-item-${j}`).append($('<img />', {
        class: 'd-block w-100 img-in-carousel',
        src: data[j]["Img"] 
    }))
    $(`#carousel-item-${j}`).append($('<div />', {
        class: 'carousel-caption d-none d-md-block'
    }))
}


function mainPageCards(i, data){
    var id_number = data[i]['id'];
    $('.card-deck').append($('<div />', {
        id: `card-${id_number}`,
        class: 'card mainCard' 
    }))
    $(`#card-${id_number}`).append($('<div />',{
        id: `cardImg-${id_number}`,
        class: 'card-img',
        style: `background-image:url(${data[i]['Img']})`
     
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
        onclick: `onViewClick(${id_number})`,
        text: 'View'
    }))
    $(`#card-${id_number}`).append($('<div />', {
        id: `cardBody-${id_number}`,
        class: 'card-body card-body-cascade'
    }))
    $(`#cardBody-${id_number}`).append($('<h4 />', {
        class: 'font-weight-bold card-title',
        text: data[i]['Name']
    })).append($('<p />', {
        class: 'card-text',
        text: data[i]['Description']
    }))

}

function disableSubmit(){
    //gapi.auth2.getAuthInstance().isSignedIn.get()
    if(sessionStorage.userConnect != "true"){
        window.location.href = "/loginPage.html";
    }
}