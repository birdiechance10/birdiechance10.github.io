$(function () {



    function switchBG() {
        
        if ($('.changeImg li').eq(0).css("display") == 'block'){
            
             $('.changeImg li').eq(0).fadeOut(4000);
            
             $('.changeImg li').eq(1).fadeIn(4000);
            
        }else{
             $('.changeImg li').eq(1).fadeOut(4000);
             $('.changeImg li').eq(0).fadeIn(4000);
            
        }
    }
    
    $('.nomemb button').click(function(){
        
        
        $('.rightLoginBox').css('display','none');
        $('.nomembLoginArea').css('display','block');
        
    });
    
    $('.nomembLoginArea .header button').click(function(){
        
        
        $('.rightLoginBox').css('display','block');
        
        $('.nomembLoginArea').css('display','none');
    });
    
    

    setInterval(function () {

        switchBG();

    }, 500);
    
    
});
