const imgs = document.getElementById("imgs");

const img = document.querySelectorAll('#imgs img');

const button = document.getElementById("btn");



let index = 0;

function run(){
    index++;
    if (index > img.length){
        index = 0
    }
        imgs.style.transform = `translateX(${-index * 500}px)`
    
}

button.addEventListener("click", () =>{
    run();
    console.log(run);
    console.log(index)
    console.log(img.length)
})