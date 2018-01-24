$(function () {


    //약관동의
    function customer() {
        if ($('.costomerAgreeArea path').attr('fill') == '#77a2db') {

            $('.costomerAgreeArea path').attr('fill', '#909090');
        } else {

            $('.costomerAgreeArea path').attr('fill', '#77a2db');

        }
    }

    $('.costomerAgreeArea path').click(function () {
        customer();

    });

    $('.costomerAgreeArea button').click(function () {

        $('.costomerAgreeText').slideToggle();

    });



    //개인정보취급방침   

    function infoAgree() {
        if ($('.infoAgreeAgree path').attr('fill') == '#77a2db') {

            $('.infoAgreeAgree path').attr('fill', '#909090');
        } else {

            $('.infoAgreeAgree path').attr('fill', '#77a2db');
        }
    }

    $('.infoAgreeAgree path').click(function () {
        infoAgree();
    });

    $('.infoAgreeAgree button').click(function () {

        $('.infoAgreeAgreeText').slideToggle();

    });




    //마케팅수신동의

    function marketing() {
        if ($('.marketingAgree path').attr('fill') == '#77a2db') {

            $('.marketingAgree path').attr('fill', '#909090');
        } else {

            $('.marketingAgree path').attr('fill', '#77a2db');



        }
    }
    $('.marketingAgree path').click(function () {
        marketing();
    });



    $('.marketingAgree button').click(function () {

        $('.marketingAgreeText').slideToggle();

    });




    //전체동의하기
    $('.totalAgreeArea path').click(function () {
        customer();
        infoAgree();
        marketing();


    });


});
