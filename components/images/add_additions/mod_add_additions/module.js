function reset_additions_row_btnevents() {

    $('.additions_class .btn-warning').unbind('click');
    $('.additions_class .btn-danger').unbind('click');
    $('.additions_class .btn-success').unbind('click');

$('.additions_class .btn-warning').click(function() {
   $(this).parent().parent().toggleClass('addition_editable');
});

$('.additions_class .btn-danger').click(function() {
    $(this).parent().parent().remove();
 });

 $('.additions_class .btn-success').click(function() {
    $(this).parent().parent().removeClass('addition_editable');
 });

}
reset_additions_row_btnevents();


$('#btn_add_additions').click(function(){
    let random = Math.random();
    const addition_row_template =
    `<!---additions row-->
    <div class="row additions_class addition_editable mt-2">
      <div class="col-sm-6 mb-2">
        <input type="text" class="form-control">
      </div>
      <div class="col-sm-auto">
        <div class="squaredThree">
          <input type="checkbox" value="None" id="addrow_free`+random+`" name="check" />
          <label for="addrow_free`+random+`"></label>
        </div>
        <label>Free</label>
      </div>
      <div class="col-sm-auto">
        <div class="squaredThree">
          <input type="checkbox" value="None" id="addrow_paid`+random+`" name="check2" />
          <label for="addrow_paid`+random+`"></label>
        </div>
        <label>Paid</label>
      </div>
      <div class="col-sm-3">
        <button type="button" class="btn btn-warning btn-sm">
          <i class="fa fa-pencil"></i>
        </button>
        <button type="button" class="btn btn-danger btn-sm">
          <i class="fa fa-trash-o"></i>
        </button>
        <button type="button" class="btn btn-success btn-sm">
          Save
        </button>
      </div>

    </div>
  <!--- /row -->`
    $('#addition_rows').prepend(addition_row_template);
    reset_additions_row_btnevents();
});