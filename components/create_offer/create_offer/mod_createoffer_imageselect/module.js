$('#btn_addtorow_image').click(function(){
  $('.card-body .image-back').show();
  $('.card-body .image-front').show();
  $('.card-body .video-back').hide();
    $('#create_backgroundimage .carousel-inner').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 11,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
      autoplay:false
    });

    $('#create_backgroundimage .carousel-inner').on('afterChange', function(slick, currentSlide){
      let img_src = $('#create_backgroundimage .slick-current').attr('src');
      $('.filldata_image_container h1').remove();
      $('.filldata_image_container').css('background-image','url('+img_src+')');
    });

    $('#create_backgroundimage .carousel-inner').on('init', function(slick){
      let img_src = $('#create_backgroundimage .slick-current').attr('src');
      $('.filldata_image_container h1').remove();
      $('.filldata_image_container').css('background-image','url('+img_src+')');
    });


$('#create_itemimage .carousel-inner').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 11,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
      autoplay:false
    });
  });

  $('#create_itemimage .carousel-inner').on('afterChange', function(slick, currentSlide){
    let img_src = $('#create_itemimage .slick-current').attr('src');
    $('.filldata_image_container .filldata_image_image').attr('src',img_src);
  });
//Video
{$('#btn_addtorow_video').click(function(){
  $('.card-body .image-back').hide();
  $('.card-body .image-front').hide();
  $('.card-body .video-back').show();
  $('#create_itemimage .carousel-inner').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 11,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
      autoplay:false
    });
    $('#create_backgroundimage .carousel-inner').on('init', function(slick){
      let img_src = $('#create_backgroundimage .slick-current').attr('src');
      $('.filldata_image_container h1').remove();
      $('.filldata_image_container').css('background-image','url('+img_src+')');
    });
    
  });

$('#create_itemimage .carousel-inner').on('afterChange', function(slick, currentSlide){
  let img_src = $('#create_itemimage .slick-current').attr('src');
  $('.filldata_image_container .filldata_image_image').attr('src',img_src);
});}

