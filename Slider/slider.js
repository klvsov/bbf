window.onload = function(){
    /*let left = document.querySelector('.prev');
    let right = document.querySelector('.next');*/
    let imgs = document.querySelectorAll('.images img');
    let img = 0;
    function autoSlide(){  /*camel case*/
        imgs[i].className = '';
        if(i == imgs.length - 1){
            i = 0;
        }
        i++;
        imgs[i].className= 'showed';       
    }

    setInterval(autoSlide, 3000);
}