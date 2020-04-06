var searchInput = $('#searchInput').val()
var query = {
    'search': searchInput,
    'userID': sessionStorage.userID
};

$.get("api/search", query, function (data) {
    serchCards(data)
})

function serchCards(data) {
    const cardsInRow = 4
    let Rows = Math.ceil(data.length / cardsInRow)
    for (let i = 0; i < Rows; i++) {
        $('.container').append($('<div />', {
            id: `row-${i}`,
            class: 'row equal'
        }))
        for (let j = i * cardsInRow; j < (i * cardsInRow + cardsInRow) && j < data.length; j++) {
            var id_number = data[j]['id'];
            $(`#row-${i}`).append($('<div />', {
                id: `col-${j}`,
                class: 'col-sm-3 d-flex pb-3'
            }))
            $(`#col-${j}`).append($('<div />', {
                id: `card-${id_number}`,
                class: 'card'
            }))
            $(`#card-${id_number}`).append($('<div />', {
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
                onclick: `showRecipePage(${id_number})`,
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
}

//# sourceURL=searchPage.js