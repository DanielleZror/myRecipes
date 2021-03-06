$('#userName').text(sessionStorage.userName);

$(function () {

    mainContent = $("#main");

    $("nav").delegate("a", "click", function () {
        window.location.hash = $(this).attr("href");
        return false;
    });

});



$(window).bind('hashchange', function () {
    $mainContent = $("#main");
    newHash = window.location.hash.substring(1);

    if (newHash) {
        $mainContent.fadeOut(200, function () {
            $mainContent.hide().load(newHash, function () {
                $mainContent.fadeIn(200)
                $("nav a").removeClass("active");
                $("nav a[href='" + newHash + "']").addClass("active");
            });
        });
    };

});
function showRecipePage(numberId) {
    window.location.hash = 'oneRecipe.html' + '#' + numberId;
}

function showAllRecipesPage() {
    window.location.hash = 'all.html';
}

$("#searchInput").on("keydown", function (event) {
    if (event.which == 13) {
        console.log($('#searchInput').val())
        window.location.hash = 'searchPage.html'
    }
});

$('#logout').click(function () {
    sessionStorage.clear()
    window.location.href = "loginPage.html";
});

function disableSubmit(){
    if(sessionStorage.userConnect != "true"){
        window.location.href = "/loginPage.html";
    } else {
        window.location.hash = 'mainPage.html'
    }
}


