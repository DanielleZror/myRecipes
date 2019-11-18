  $.get("api/all", function (data) {
    for (var i = 0; i < data.length; i++) {
        mainPageCards(i,data)
    }
})

$('#btn-test').click(function () {

});

function mainPageCards(i, data){
    $('.card-deck').append($('<div />', {
        id: `card-${i}`,
        class: 'card'
    }))
    $(`#card-${i}`).append($('<img />', {
        id: `imgCard-${i}`,
        class: 'card-img-top',
        src: './food3.jpg',
        alt: 'card image cap'
    })).append($('<div />', {
        id: `cardBody-${i}`,
        class: 'card-body'
    }))
    $(`#cardBody-${i}`).append($('<h5 />', {
        class: 'card-title',
        text: data[i]['name']
    })).append($('<p />', {
        class: 'card-text',
        text: data[i]['text']
    })).append($('<a />', {
        class: 'btn btn-outline-secondary',
        text: 'go Somewere',
        href: '#'
    }))
}

