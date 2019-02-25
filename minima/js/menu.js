$(function () {
    $('.menu').on('click', function () {
       $('.menuToggle').fadeToggle(3000, function () {
           if($(this).css('display') === 'none'){
               $(this).removeAttr('style');
           }
       });
    });
});