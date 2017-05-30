$(document).ready(function () {

    $('.button-container').hide();

    $('input[type="radio"]').click(function() {
        if($(this).attr('name') == 'example1') {
             $('.question1').hide();
        }
        else if ($(this).attr('name') == 'example2') {
             $('.question2').hide();
             $('.question3').show();
        } else if ($(this).attr('name') == 'example3') {
             $('.question3').hide();
             $('.button-container').show();
        }
    });

});
