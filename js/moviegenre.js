$(document).ready(function() {

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

    var genres = [];
    var myGenreLength = genres.length;
    var newArray = []

    for (var i = 0; i < myGenreLength; i++) {
        var url = "https://api.themoviedb.org/3/genre/" + genres[i] + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc";
        newArray.push(url);
    }

    function searchMovie() {

        genreValue = $(this).val();
        genres.push(genreValue);

        tbody.empty();

        $.each(newArray, function( i, value ) {

            $.ajax({
                url: value,
                dataType: "jsonp",
                success: renderMoviesTemplate
            });

        });

        function renderMoviesTemplate(movies) {

          console.log(movies);

          var movieGenres = movies.results;
          movieGenres.splice(3,17);

          for(var i in movieGenres) {

              var movie = movieGenres[i];
              var genre = movie.original_title;
              var poster = movie.poster_path;

              var tr = template.clone();

              tr.find(".moviePoster")
              .attr("src",  "http://image.tmdb.org/t/p/w342/" + poster);

              tbody.append(tr);
            }

            $("#results").prepend("<h4>You might be interested in one of these...</h4>");

        }

    }

});
