    
    // Preloader

     $(window).load(function() {
         $('#before-load').find('preload-icon').fadeOut().end().delay(400).fadeOut('slow');
     });



    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
          $('.fixed-mnu').addClass('stickytop');
          $('.fixed-mnu').removeClass('fixed-mnu');
        } else {
          $('.stickytop').addClass('fixed-mnu');
          $('.stickytop').removeClass('stickytop');
        }
      });
    });



    $(document).ready(function() {

        $("#portfolio-grid").mixItUp();

        $(".portfolio-filter li").click(function() {
            $(".portfolio-filter li").removeClass("active-filter");
            $(this).addClass("active-filter");
        });

        // modal windows
       
        $(".popup").magnificPopup({type:"image"});
        $(".popup-content").magnificPopup({
            type:"inline",
            midClick: true,
        mainClass: 'mfp-fade',
        removalDelay: 350
        });

        $('nav a').mPageScroll2id({
            offset:50
        });

        $('.scroll-button a').mPageScroll2id({
            offset:50
        });

        $('.contact-button').mPageScroll2id({
            offset:50
        });

        $('footer a').mPageScroll2id({
            offset:50
        });

        $('#nav-icon').click(function(){
            $(this).toggleClass('nav-icon-active');
            $(".top-mnu").toggleClass("top-mnu-active");
            $(".mnu-dark-background").toggleClass("mnu-dark-background-active");
        });

        $('.animate-icon').click(function(){
            $('#nav-icon').removeClass('nav-icon-active');
            $(".top-mnu").removeClass("top-mnu-active");
            $(".mnu-dark-background").removeClass("mnu-dark-background-active");
        });

        $('.top-mnu a').click(function(){
            $('#nav-icon').removeClass('nav-icon-active');
            $(".top-mnu").removeClass("top-mnu-active");
            $(".mnu-dark-background").removeClass("mnu-dark-background-active");
        });

    });

    // Bootstrap validator

    $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );


    // Rellax

    var rellax = new Rellax('.rellax-text', {speed: -4})
    var rellax = new Rellax('.rellax-number', {speed: -4})

