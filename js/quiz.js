$(document).ready(function () {
    var all,
        randomed;

    all = generateAll();
    randomed = generateRandomed(all);

    $("#generator").on("click", function (evt) {
        evt.preventDefault();
        randomed = doNext(all, randomed);
    });

    //
    // * My js start *
    //
    $('input[type="radio"]').click(function() {
        if($(this).attr('name') == 'example1') {
             $('.question1').hide();
        }
        else if ($(this).attr('name') == 'example2') {
             $('.question2').hide();
        } else if ($(this).attr('name') == 'example3') {
             $('.question3').hide();
             $('.button-container').show();
        }
    });

    $('#generator').click(function() {
        $('.button-container').hide();
     });
    //
    // * My js end *
    //
});

function generateAll() {
    // Generates the array of "all" divs to work on
    var a = [];
    var divs = $(".hide > div.lightbox");
    for (var i = 1; i <= divs.length; i++) {
        a.push(i);
    }
    console.log("List of divs available to toggle: " + a);
    return a;
}

function generateRandomed(all) {
    // Randomizes the original array
    randomed = fisherYates(all);
    console.log("Setting randomized array: " + randomed);
    return randomed;
}

function doNext(all, randomed) {
    $(".lightbox, #last-div").hide();

    if (randomed.length < 1) {
        console.log("All lightboxes toggled, showing last, then starting over");
        $("#last-div").show();
        randomed = generateRandomed(all);
    } else {
        var next = randomed.shift();
        var selector = "#lightbox" + next;
        console.log("Showing " + selector);
        $(selector).show();
        console.log("What's left: " + randomed);
    }

    return randomed;
}

// Randomizes an array and returns the new one (doesn't modify original)
function fisherYates ( myArray ) {
  var return_arr = myArray.slice(0);
  var i = return_arr.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = return_arr[i];
     var tempj = return_arr[j];
     return_arr[i] = tempj;
     return_arr[j] = tempi;
  }
  return return_arr;
}
