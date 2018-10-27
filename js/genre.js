$(document).ready(function() {


    // $.getJSON('https://api.themoviedb.org/3/genre/movie/list?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US', function(json) {
    //
    // });


    // console.log(currentDate);


    $('#get-started').click(function() {
        $('.intro-overlay').fadeOut(500, function() {
            this.addClass('get-started');
        });
    });

    var searchList = document.querySelectorAll('.search');
    var table = $("#results");
    var tbody = $("#container");
    var template = $("#template").clone();


    var genreList = [
        { genre: 'action', id: 278 },
        { genre: 'adventure', id: 12 },
        { genre: 'animation', id: 16 },
        { genre: 'comedy', id: 35 },
        { genre: 'crime', id: 80 },
        { genre: 'documentary', id: 99 },
        { genre: 'drama', id: 36 },
        { genre: 'family', id: 10751 },
        { genre: 'fantasy', id: 14 },
        { genre: 'history', id: 36 },
        { genre: 'horror', id: 27 },
        { genre: 'music', id: 10402 },
        { genre: 'mystery', id: 9648 },
        { genre: 'romance', id: 10749 },
        { genre: 'scienceFiction', id: 34 },
        { genre: 'thriller', id: 53 },
        { genre: 'war', id: 10752 },
        { genre: 'western', id: 37 }
    ];


function resultsButton() {
  var attribute = this.getAttribute('value');
  var theMovie;
  genreList.filter(movie => movie.genre === attribute ? theMovie = movie.id : false);

  var newArray = []
  var url = "https://api.themoviedb.org/3/genre/" + theMovie + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc";

  newArray.push(url);

  tbody.empty();

  $.each(newArray, ( i, value ) => {

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
    var releaseDate = movie.release_date;
    var overview = movie.overview;
    var tr = template.clone();

    var today = new Date();
    var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    if (currentDate >= releaseDate) {
      console.log('yay!');
    } else {
        console.log('nope!');
    }


    tr.find(".moviePoster")
    .attr("src",  "http://image.tmdb.org/t/p/w342/" + poster).fadeIn('slow');

    tbody.append(tr);

    }

  }
}

[].forEach.call(searchList, e => e.addEventListener('click', resultsButton));











    ///////////////////////////////
    // OLD
    ///////////////////////////////


    // $('.search').click(searchMovie);
    // var table = $("#results");
    // var tbody = $("#container");
    // var template = $("#template").clone();

    // var action = 28;
    // var adventure = 12;
    // var animation = 16;
    // var comedy = 35;
    // var crime = 80;
    // var documentary = 99;
    // var drama = 18;
    // var family = 10751;
    // var fantasy = 14;
    // var history = 36;
    // var horror = 27;
    // var music = 10402;
    // var mystery = 9648;
    // var romance = 10749;
    // var scienceFiction = 878;
    // var thriller = 53;
    // var war = 10752;
    // var western = 37;






    // function searchMovie() {
    //
    //     genreValue = $(this).val();
    //     var newArray = []
    //
    //
    //
    //     var url = "https://api.themoviedb.org/3/genre/" + genreValue + "/movies?api_key=3b870b8584e27e2ecaf4ae7905d099ff&language=en-US&include_adult=false&sort_by=created_at.asc";
    //
    //     newArray.push(url);
    //
    //
    //     tbody.empty();
    //
    //
    //     $.each(newArray, function( i, value ) {
    //
    //       $.ajax({
    //             url: value,
    //             dataType: "jsonp",
    //             success: renderMoviesTemplate
    //       });
    //
    //     });
    //
    //
    //     function renderMoviesTemplate(movies) {
    //
    //       var movieGenres = movies.results;
    //       movieGenres.splice(3,17);
    //
    //       for(var i in movieGenres) {
    //
    //           var movie = movieGenres[i];
    //           var genre = movie.original_title;
    //           var poster = movie.poster_path;
    //           var tr = template.clone();
    //
    //           tr.find(".moviePoster")
    //               .attr("src",  "http://image.tmdb.org/t/p/w342/" + poster).fadeIn('slow');
    //
    //           tbody.append(tr);
    //
    //         }
    //
    //     }
    //
    // }

});
