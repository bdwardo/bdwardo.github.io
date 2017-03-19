$(document).ready(function() {


    // $.getJSON('https://api.themoviedb.org/3/genre/movie/list?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US', function(json) {
    //
    // });

    $("#search").click(searchMovie);
    var table = $("#results");
    var tbody = $("#container");
    var template = $("#template").clone();

    var action = 28;
    var adventure = 12;
    var animation = 16;
    var comedy = 35;
    var crime = 80;
    var documentary = 99;
    var drama = 18;
    var family = 10751;
    var fantasy = 14;
    var history = 36;
    var horror = 27;
    var music = 10402;
    var mystery = 9648;
    var romance = 10749;
    var scienceFiction = 878;
    var thriller = 53;
    var war = 10752;
    var western = 37;



    // var urls = ["https://api.themoviedb.org/3/genre/" + action + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc",
    //             "https://api.themoviedb.org/3/genre/" + comedy + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc"]


    // var genres = [action, adventure, animation, comedy, crime, documentary, drama, family, fantasy, history, horror, music, mystery, romance, scienceFiction, thriller, war, western];
    var genres = [action];
    var myGenreLength = genres.length;
    var newArray = []

    for (var i = 0; i < myGenreLength; i++) {
        var url = "https://api.themoviedb.org/3/genre/" + genres[i] + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc";
        newArray.push(url);

    }

    function searchMovie() {

        var term = $("#term").val();

        tbody.empty();


        $.each(newArray, function( i, value ) {

          $.ajax({
                // url: "https://api.themoviedb.org/3/search/movie?api_key=3b870b8584e27e2ecaf4ae7905d099ff&query=" + term,
                // url: "https://api.themoviedb.org/3/genre/movie/list?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US",
                url: value,
                dataType: "jsonp",
                success: renderMoviesTemplate
          });

        });




        // $.ajax({
        //       url: "https://api.themoviedb.org/3/search/movie?api_key=3b870b8584e27e2ecaf4ae7905d099ff&query=" + term,
        //       url: "https://api.themoviedb.org/3/genre/movie/list?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US",
        //       url: "https://api.themoviedb.org/3/genre/" + action + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc",
        //            "https://api.themoviedb.org/3/genre/" + comedy + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc",
        //       dataType: "jsonp",
        //       success: renderMoviesTemplate
        // });

        function renderMoviesTemplate(movies) {

          console.log(movies);

          // tbody.empty();

          var movieGenres = movies.results;
          movieGenres.splice(3,17);

          for(var i in movieGenres) {

              var movie = movieGenres[i];
              var genre = movie.original_title;
              var poster = movie.poster_path;

              var tr = template.clone();

              // tr.find(".movieTitle")
              //     .html(genre);

              tr.find(".moviePoster")
                  .attr("src",  "http://image.tmdb.org/t/p/w342/" + poster);


              tbody.append(tr);
            }

            $("#results").prepend("<h4>You might be interested in one of these...</h4>")

        }

    }

});
