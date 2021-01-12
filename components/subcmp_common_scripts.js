/**
 *  Common to all the Sub Components
 *  Loads everytime a sub component loads
 */

/**
 * On sub complonent load
 */
function  subcmp_on_load() {
    
/**
 * Sub component navigation from a subcomponent itself
 */
$('.appbody_nav button').unbind('click').click(function(e) {
    e.stopPropagation();
    const subcmp_target = $(this).attr('subcmp_target');
    const subcmp_parentcmp = $(this).attr('subcmp_parentcmp');
    if(typeof subcmp_target !== typeof undefined && subcmp_target !== false 
        && typeof subcmp_parentcmp !== typeof undefined && subcmp_parentcmp !== false){
        load_sub_component(subcmp_parentcmp, subcmp_target);
    }

    $('.appbody_nav button').removeClass('btn-primary');
    $('.appbody_nav button').addClass('btn-light');
    $(this)
        .removeClass('btn-light')
        .addClass('btn-primary');
});
 

/**
 *  Select 2 plugin
 *  all general selects are formatted with select 2 plugin
 */
$('.general_select2').select2({
    minimumResultsForSearch: -1 // Diable search
});


}//END:on sub component load
subcmp_on_load();
