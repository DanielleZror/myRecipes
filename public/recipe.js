var id_number = {'id': window.location.hash.substring(1)};



$.get("/api/byID",id_number, function (data) {
    specipicRecipe(data)
})


function specipicRecipe(data){
    $('.recipe-card').append($('<aside />', {
        id: `card-${data["id"]}`
    })).append($('<img />', {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg",
        alt: data["Name"]
    }))
    $('.recipe-card').append($('<article />',{
        id: 'article'
    }))
    $("#article").append($('<h2 />',{
        id: 'title',
        text: data["Name"]
    }))
    $('#title').append($('<span /.', {
        id: 'titleSpan',
        class: 'mntl-sc-block-headling__text'
    }))
    $("#article").append($('<h3 />',{
        id: 'text',
        text: data["Description"]
    }))
    
    $('#article').append($('<ul />',{
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
    $('.ingredients').append($('<span />',{
        id: 'ingredients'
    }))
    $("#ingredients").append("ilk, salt, coriander, cardamom, cinnamon, turmeric, honey")

    $("#article").append($('<p />', {
        class: 'preparation'
    }))
    $('.preparation').append($('<p> Preparation method: </p>'))
    $('.preparation').append($('<span />',{
        id: 'preparation'
    }))
    $("#preparation").append(data["Preparation"])


}


