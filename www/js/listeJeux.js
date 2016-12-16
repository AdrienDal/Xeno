function getAllGames() {
    var apiHost = 'https://xenomorphe.ch/wp-json';
    $.get(apiHost + '/wp/v2/xenogame?per_page=1000')
        .then(function (response) {
            $.each(response,function() {
               $("#listViewJeux").append("<a class='list-group-item uib_w_13'  data-uib='twitter%20bootstrap/list_item' data-ver='1' style='height : 70px'><span class='badge glyphicon glyphicon-star'> </span><p class='list-group-item-text'><img style='float : left; height : 60px; margin-right : 10px;' src='"+$(this)[0].featured_image_thumbnail_url+"' /><h4 class='list-group-item-heading'>"+$(this)[0].title.rendered+"</h4></p></a>");
            });
        })
}

/*$("#listViewJeux" ."list-group-item").on('click',function(){
    
})*/


function getOneGames(id) {
    var apiHost = 'https://xenomorphe.ch/wp-json';
    $.get(apiHost + '/wp/v2/xenogame/' + id)
        .then(function (response) {
            return respond.data;
        })
}

getAllGames();
