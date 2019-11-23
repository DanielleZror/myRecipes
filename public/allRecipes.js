$.get("api/all", function (data) {
    allCards(data)
})


function allCards(data){
    const cardsInRow = 4
    let Rows = Math.round(data.length/cardsInRow)
    for (let i = 0; i < Rows; i++){
        $('.container').append($('<div />', {
            id: `row-${i}`,
            class: 'row equal' 
        }))
        for(let j= i * cardsInRow; j < (i * cardsInRow + cardsInRow) && j < data.length; j++){
            $(`#row-${i}`).append($('<div />', {
                id: `col-${j}`,
                class: 'col-sm-3 d-flex pb-3'
            }))
            $(`#col-${j}`).append($('<div />', {
                id: `card-${j}`,
                class: 'card'
            }))
            $(`#card-${j}`).append($('<div />',{
                id: `cardImg-${j}`,
                class: 'card-img',
                style: 'background-image:url(./food3.jpg)'
            }))
            $(`#cardImg-${j}`).append($('<div />', {
                id: `overCard-${j}`,
                class: 'overlay'
            }))
            $(`#overCard-${j}`).append($('<div />', {
                id: `overContent-${j}`,
                class: 'overlay-content'
            }))
            $(`#overContent-${j}`).append($('<a />', {
                class: 'hover',
                href: '#',
                text: 'View'
            }))
            $(`#card-${j}`).append($('<div />', {
                id: `cardBody-${j}`,
                class: 'card-body card-body-cascade'
            }))
            $(`#cardBody-${j}`).append($('<h4 />', {
                class: 'font-weight-bold card-title',
                text: data[j]['name']
            })).append($('<p />', {
                class: 'card-text',
                text: data[j]['text']
            }))
        }
    }
}

