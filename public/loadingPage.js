$('#userName').text(sessionStorage.userName);

$(function(){

 mainContent = $("#main");

    $("nav").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
        
});



$(window).bind('hashchange', function(){
    $mainContent = $("#main");
    newHash = window.location.hash.substring(1);
    
    if (newHash) {
        $mainContent.fadeOut(200, function() {
            $mainContent.hide().load(newHash , function() {
                    $mainContent.fadeIn(200)
                    $("nav a").removeClass("active");
                    $("nav a[href='"+newHash+"']").addClass("active");
                });
            });
    };
    
});
function onViewClick(numberId){
    window.location.hash = 'oneRecipe.html' + '#' + numberId;
}