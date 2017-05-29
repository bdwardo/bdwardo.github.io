$(function() {


    var lightbox = $('.lightboxes lightbox');

    $('#lightbox1').show();

    lightbox.each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#generator").click(function(){
      $('.button-container').fadeOut('fast');
      $('.question1').show();
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
