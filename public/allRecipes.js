$.get("api/all", function (data) {
    allCards(data)
})

$('#logout').click(function () {
    sessionStorage.removeItem("userConnect");
});

function allCards(data){
    const cardsInRow = 4
    let Rows = Math.round(data.length/cardsInRow)
    for (let i = 0; i < Rows; i++){
        $('.container').append($('<div />', {
            id: `row-${i}`,
            class: 'row equal' 
        }))
        for(let j= i * cardsInRow; j < (i * cardsInRow + cardsInRow) && j < data.length; j++){
            var id_number = data[j]['id'];
            $(`#row-${i}`).append($('<div />', {
                id: `col-${j}`,
                class: 'col-sm-3 d-flex pb-3'
            }))
            $(`#col-${j}`).append($('<div />', {
                id: `card-${id_number}`,
                class: 'card'
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
                text: data[j]['name']
            })).append($('<p />', {
                class: 'card-text',
                text: data[j]['text']
            }))
        }
    }
}

