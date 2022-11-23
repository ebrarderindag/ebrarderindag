var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var imageList = [];
imageList.length = 6;


async function getData(){
    for(var x = 1 ; x < imageList.length ; x++){
        imageList[x] = new Image();
    
      await  fetch('https://ebrarderindag.github.io/HW3-images/'+'Attack'+ x.toString()+'.png').then(res=>res.blob())
                                                 .then(blob => {
                                                    let objectURL = URL.createObjectURL(blob);
                                                    imageList[x].src = objectURL;
                                                 });
    }

}

getData();

var x = 1;
var int;
var cont=0;

btn_pause.addEventListener("click", function(){
    if(cont==1){
    clearInterval(int);
        cont=0;
    }
    else{
        int = setInterval(function(){
            x++;
            if( x >= 6){
                x = 1;
            }

            context.clearRect(200,220,400,400);
            context.drawImage(imageList[x],200,220,400,400);
        },300)
        cont=1;
    }
});

btn_stop.addEventListener("click", function(){
    clearInterval(int);
    cont = 0;
});

btn_next.addEventListener("click", function(){
    x++;
    if(x == 6){
        x = 1;
    }
    context.clearRect(200,220,400,400);
    context.drawImage(imageList[x],200,220,400,400);
});

btn_prev.addEventListener("click", function(){
    x--;
    if(x == 0){
        x = 6;
    }
    context.clearRect(200,220,400,400);
    context.drawImage(imageList[x],200,220,400,400);
});

btn_start.addEventListener("click", function(){
    x = 1;
    if (cont == 0){
        int = setInterval(function(){
            x++;
            if( x >= 6){
                x = 1;
            }
            context.clearRect(200,220,400,400);
            context.drawImage(imageList[x],200,220,400,400);
        },300)
        cont = 1;
    }
});

