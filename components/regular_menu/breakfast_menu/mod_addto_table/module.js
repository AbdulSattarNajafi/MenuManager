$('#additions').select2({
    closeOnSelect: false,
    closeOnBlur: true,
});

load_module('modal_additions','regular_menu/breakfast_menu/mod_select_additions');


$('#btn_createinrow_item').click(function(){

    let newrow_html =
    `<tr class="edit_row">
        <td class="no-pad">
          <img class="img-rectang" src="assets/img/no-image.jpg" alt="" />
        </td>
        <td><input type='text' class="form-control pl-1 pr-1"/></td>
        <td><input type='text' class="form-control  pl-1 pr-1"/></td>
        <td class="btn-container">
            <button type="button" class="btn btn-light btn-sm empty-btn">
            <i class="empty-icon"></i>
            </button>
        </td>
        <td><input type='text' class="form-control pl-1 pr-1"/></td>
        <td id="td_box"><textarea type='text' class="form-control pl-1 pr-1" style="height:40px; resize:none"></textarea>
          <button type="button" class="ingri-btn"><i class="fa fa-list-alt"></i></button>
          <input type="text" class="ingri-input">
        </td>
        <td><input type='text' class="form-control pl-1 pr-1"/></td>
        <td><input type='text' class="form-control pl-1 pr-1"/></td>
        <td><input type='text' class="form-control  pl-1 pr-1"/></td>
        <td>
            
        </td>
        <td></td>
        <td>
          <button type="button" class="btn btn-secondary btn-sm mb-1">
            <i class="fa fa fa-eye"></i>
          </button>
          <button type="button" class="btn btn-success btn-sm mb-1 btn-green">
            Save
          </button>
          <button type="button" class="btn btn-danger btn-sm mb-1 btn-red">
            <i class="fa fa-times"></i>
          </button>
        </td>
      </tr>`;

      $('#results_table_placeholder #tr_remo').remove();
      $('#results_table_placeholder tbody').prepend(newrow_html);
      //Adding icon to the Button
      $('.edit_row .empty-btn').click(function() {
        $('.edit_row .empty-btn .empty-icon').addClass('fa fa-check fa-lg');
      });
      function ingrids() {
        const ingriBtn = document.querySelector('.ingri-btn');
        const ingriInput = document.querySelector('.ingri-input');
        ingriBtn.addEventListener('click', () => {
          ingriBtn.classList.toggle('active');
          ingriInput.classList.toggle('ingri-show');
        });
      };
      ingrids();
});

//Images
$('#btn_addtorow_image').click(function(){
    $('#regmenu_imagecarousel .carousel-inner').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 7,
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

  $('#regmenu_imagecarousel .carousel-inner').on('afterChange', function(slick, currentSlide){
    let img_src = $('#regmenu_imagecarousel .slick-current').attr('src');
    $('.edit_row img').attr('src',img_src);
  });
//Video
  $('#btn_addtorow_video').click(function(){
    $('#regmenu_imagecarousel .carousel-inner').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 7,
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

  $('#regmenu_videocarousel .carousel-inner').on('afterChange', function(slick, currentSlide){
    let img_src = $('#regmenu_videocarousel .slick-current').attr('src');
    $('.edit_row img').attr('src',img_src);
  });