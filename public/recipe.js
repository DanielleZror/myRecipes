var id_number = {'id': window.location.hash.substring(1)};



$.get("/api/byID",id_number, function (data) {
    specipicRecipe(data)
})


function specipicRecipe(data){
    $('.recipe-card').append($('<aside />', {
        id: `card-${data["id"]}`
    })).append($('<img />', {
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/oatmeal.jpg",
        alt: data["name"]
    }))
    $('.recipe-card').append($('<article />',{
        id: 'article'
    }))
    $("#article").append($('<h2 />',{
        id: 'name',
        text: data["name"]
    }))
    $("#article").append($('<h3 />',{
        id: 'text',
        text: data["text"]
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
    $("#paragraf").append($('<span />', {
        id: 'time'
    }))
    $("#time").append("15 min")

    $("#article").append($('<p />', {
        id: 'preparation'
    }))
    $("#preparation").append(data["text"])
    $("#article").append($('<p />', {
        class: 'ingredients'
    }))
    $('.ingredients').append($('<span />',{
        id: 'ingredients'
    }))
    $("#ingredients").append("ilk, salt, coriander, cardamom, cinnamon, turmeric, honey")

}



// <ul>
//     <li><i class="fas fa-clock"></i><span>15 min</span></li>
// </ul>

// <p>For an extra thick and creamy bowl, add oat bran.  It'll make for a hearty helping and also add more fiber to your meal.  If you love the taste of chai, you'll enjoy this spiced version with coriander, cinnamon, and turmeric.</p>

// <p class="ingredients"><span>Ingredients:&nbsp;</span>Milk, salt, coriander, cardamom, cinnamon, turmeric, honey, vanilla extract, regular oats, oat bran.</p>

// </article>

