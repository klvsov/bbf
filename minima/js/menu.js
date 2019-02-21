$(function () {
    $('.menu').on('click', function () {
       $('.menuToggle').fadeToggle(300, function () {
           if($(this).css('display') === 'none'){
               $(this).removeAttr('style');
           }
       });
    });
});