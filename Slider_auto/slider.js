window.onload = function(){
    let images = document.querySelectorAll('.images img');
    let i = 0;
    


    function play(){
        images[i].className = '';
        i++;
        if(i >= images.length){
            i = 0;
        }
        images[i].className = 'showed';
    }

    setInterval(play, 5000);

}