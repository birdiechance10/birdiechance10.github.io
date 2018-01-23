$(function () {



    $(this).click(function(){
        console.log('눌림');
        console.log($(this).attr('type'));
         $(this).parent().parent().next().slideToggle();
        
    });
    
    
    
    
});
