$(function() {

    $('#lightbox1').show();
//     $('.button-container').hide();
//
//     $('#generator').click(function() {
//       $('#results').hide();
//     $(this).parents('.lightbox').hide();
//     $(this).parents('.lightbox').next('.lightbox').show();
//
//     return false;
// });

    $(".lightboxes .lightbox").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#generator").click(function(){
      $("#container").empty();
        if ($(".lightboxes .lightbox:visible").next().length != 0)
            $(".lightboxes .lightbox:visible").next().show().prev().hide();
        else {
            $(".lightboxes .lightbox:visible").hide();
            $(".lightboxes .lightbox:first").show();
        }
        return false;
    });

});
