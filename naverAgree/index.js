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
        $('.findMyinfoArea').css('display','none');
        
    });
    
    $('.nomembLoginArea .header button').click(function(){
        
        
        $('.rightLoginBox').css('display','block');
        
        $('.nomembLoginArea').css('display','none');
        $('.findMyinfoArea').css('display','none');
    });
    
    $('.findMyinfoBtn button').click(function(e){
        e.preventDefault();
        
        $('.rightLoginBox').css('display','none');
        $('.findMyinfoArea').css('display','block');
        
    });
    
    $('.findMyinfoArea .header button').click(function(){
        
        console.log("엑스버튼누름요");
        $('.rightLoginBox').css('display','block');
        
        $('.nomembLoginArea').css('display','none');
        $('.findMyinfoArea').css('display','none');
    });
    
    

    setInterval(function () {

        switchBG();

    }, 500);
    
    $('#selectEmailID').change(function(){ $("#selectEmailID option:selected").each(function () { 
        if($(this).val()== '1'){ //직접입력일 경우
            $("#str_email02ID").val(''); //값 초기화
            $("#str_email02ID").attr("disabled",false); //활성화
            
        }else{ //직접입력이 아닐경우
            $("#str_email02ID").val($(this).val()); //선택값 입력
            $("#str_email02ID").attr("disabled",true); //비활성화
            } 
            }); 
                                       });

    $('#selectEmailPW').change(function(){ $("#selectEmailPW option:selected").each(function () { 
        if($(this).val()== '1'){ //직접입력일 경우
            $("#str_email02PW").val(''); //값 초기화
            $("#str_email02PW").attr("disabled",false); //활성화
            
        }else{ //직접입력이 아닐경우
            $("#str_email02PW").val($(this).val()); //선택값 입력
            $("#str_email02PW").attr("disabled",true); //비활성화
            } 
            }); 
                                       });

    
    
});
