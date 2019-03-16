window.onload = function(){
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let images = document.querySelectorAll('.images img');
    let i = 0;
    prev.onclick = function(){
        images[i].className = '';
        i--;
        if(i < 0){
            i = images.length - 1;
        }
        images[i].className = 'showed';
    };

    next.onclick = function(){
        images[i].className = '';
        i++;
        if(i >= images.length){
            i = 0;
        }
        images[i].className = 'showed';
    };



}