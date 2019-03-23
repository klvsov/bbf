window.onload = function(){
     let gamb = document.querySelector('.menu');
     let menu = document.querySelector('.menuToggle'); 
     gamb.addEventListener('click', function(){
         if(menu.style.display == 'none'){
             menu.style.display = 'block';
         } else{
             menu.style.display = 'none';
         }
     })
 }


// $(document).ready(function(){
//     $(function(){
//         $('.menu').on('click', function(){
//             $('.menuToggle').fadeToggle(5000, function(){
//                 if($(this).css('display') == 'none'){
//                     $(this).removeAttr('style');
//                 }
//             })
//         })
//     })    
// })