$(document).ready(function(){

   $('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var getPoster = function(){

        var film = $('#term').val();

         if(film == ''){

            $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");

         } else {

            $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");

            $.getJSON("https://api.themoviedb.org/3/movie/550?api_key=3b870b8584e27e2ecaf4ae7905d099ff/" + film + "?callback=?", function(json) {
               if (json != "Nothing found."){
                     $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
                  } else {
                     $.getJSON("https://api.themoviedb.org/3/movie/550?api_key=3b870b8584e27e2ecaf4ae7905d099ff/goonies?callback=?", function(json) {
                        console.log(json);
                        $('#poster').html('<h2 class="loading">Blah</h2><img id="thePoster" src=" + json[0].posters[0].image.url + " />');
                     });
                  }
             });

          }

        return false;
   }

   $('#search').click(getPoster);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

});
