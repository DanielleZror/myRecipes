$.get("api/all", function (data) {
    allCards(data)
})


function allCards(data){
    const cardsInRow = 4
    let Rows = Math.round(data.length/cardsInRow)
    for (let i = 0; i < Rows; i++){
        $('.container').append($('<div />', {
            id: `row-${i}`,
            class: 'row'
        }))
        for(let j= i * cardsInRow; j < (i * cardsInRow + cardsInRow) && j < data.length; j++){
            $(`#row-${i}`).append($('<div />', {
                id: `col-${j}`,
                class: 'col-sm-3'
            }))
            $(`#col-${j}`).append($('<div />', {
                id: `card-${j}`,
                class: 'card'
            }))
            $(`#card-${j}`).append($('<img />', {
                id: `img-${j}`,
                class: 'card-img-top',
                src: './food3.jpg',
                alt: 'Card image cap'
            })).append($('<div />', {
                id: `cardBody-${j}`,
                class: 'card-body'
            }))
            $(`#cardBody-${j}`).append($('<h5 />', {
                class: 'card-title',
                text: data[j]['name']
            })).append($('<p />', {
                class: 'card-text',
                text: data[j]['text']
            })).append($('<a />', {
                class: 'btn btn-outline-secondary',
                text: 'go Somewere',
                href: '#'
            }))
        }
    }
}

