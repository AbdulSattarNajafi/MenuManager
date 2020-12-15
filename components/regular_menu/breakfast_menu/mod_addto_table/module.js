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
        <td><input type='text' class="form-control"/></td>
        <td><input type='text' class="form-control"/></td>
        <td>
            <button type="button" class="btn btn-light btn-sm">
                <i class="fa fa fa-times"></i>
              </button>
        </td>
        <td><input type='text' class="form-control"/></td>
        <td><textarea type='text' class="form-control" style="height:40px; resize:none"></textarea></td>
        <td></td>
        <td></td>
        <td></td>
        <td><input type='text' class="form-control"/></td>
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
      let resultBox = $('#results_table_placeholder tbody');
      resultBox.prepend(newrow_html);
});

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