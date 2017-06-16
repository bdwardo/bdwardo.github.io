$(document).ready(function() {


    // $.getJSON('https://api.themoviedb.org/3/genre/movie/list?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US', function(json) {
    //
    // });


    $('#get-started').click(function() {
        $('.intro-overlay').fadeOut(500, function() {
            this.addClass('get-started');
        });
    });



    $('.search').click(searchMovie);
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


    function searchMovie() {

        genreValue = $(this).val();
        var newArray = []

        if (genreValue === 'scienceFiction') {
            genreValue = 878;
        }

        if (genreValue === 'western') {
            genreValue = 37;
        }

        if (genreValue === 'drama') {
            genreValue = 18;
        }

        if (genreValue === 'fantasy') {
            genreValue = 14;
        }

        if (genreValue === 'romance') {
            genreValue = 10749;
        }

        if (genreValue === 'adventure') {
            genreValue = 12;
        }

        if (genreValue === 'comedy') {
            genreValue = 35;
        }

        var url = "https://api.themoviedb.org/3/genre/" + genreValue + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc";

        newArray.push(url);


        tbody.empty();


        $.each(newArray, function( i, value ) {

          $.ajax({
                url: value,
                dataType: "jsonp",
                success: renderMoviesTemplate
          });

        });


        function renderMoviesTemplate(movies) {

          var movieGenres = movies.results;
          movieGenres.splice(3,17);

          for(var i in movieGenres) {

              var movie = movieGenres[i];
              var genre = movie.original_title;
              var poster = movie.poster_path;
              var tr = template.clone();

              tr.find(".moviePoster")
                  .attr("src",  "http://image.tmdb.org/t/p/w342/" + poster).fadeIn('slow');

              tbody.append(tr);

            }

        }

    }

});
