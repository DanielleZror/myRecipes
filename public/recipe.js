var currHash = window.location.hash.substring(1);
var query = { 'id': currHash.split('#')[1], 'userID': sessionStorage.userID };


$.get("/api/byID", query, function (data) {
    specipicRecipe(data)
})


function specipicRecipe(data) {
    $('.recipe-card').append($('<aside />', {
        id: `card-${data["id"]}`
    })).append($('<img />', {
        src: data["Img"],
        alt: data["Name"]
    }))
    $('.recipe-card').append($('<article />', {
        id: 'article'
    }))
    $("#article").append($('<h2 />', {
        id: 'title',
        text: data["Name"]
    }))
    $('#title').append($('<span /.', {
        id: 'titleSpan',
        class: 'mntl-sc-block-headling__text'
    }))
    $("#article").append($('<h3 />', {
        id: 'text',
        text: data["Description"]
    }))

    $('#article').append($('<ul />', {
        id: 'paragraf'
    }))
    $("#paragraf").append($('<li />', {
        id: 'icon'
    }))
    $("#icon").append($('<i />', {
        class: "fas fa-clock"
    }))
    $("#paragraf").append($('<TimeSpan />', {
        id: 'time'
    }))
    $("#time").append(data["TimeHours"] + "Hours" + data["TimeMinutes"] + "Minutes")

    $("#article").append($('<p />', {
        class: 'ingredients '
    }))
    $('.ingredients').append($('<p> Ingredients: </p>'))
    Ingredients(data)
    $("#article").append($('<p />', {
        class: 'preparation'
    }))
    $('.preparation').append($('<p> Preparation method: </p>'))
    $('.preparation').append($('<span />', {
        id: 'preparation'
    }))
    $("#preparation").append(data["Preparation"])
}

function Ingredients(data) {
    for (let i = 0; i < data["Ingredients"].length; i++) {
        var ingredientsLineData = data["Ingredients"][i]["Amount"] + " " + data["Ingredients"][i]["Unit"] + " " + data["Ingredients"][i]["Item"]
        $(".ingredients").append($('<spanIng />', {
            id: 'ingredientsLineData',
            text: ingredientsLineData
        }))


    }
}

//# sourceURL=recipe.js