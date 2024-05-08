let imgs = document.getElementsByClassName("slide");
let checkbox = document.getElementById("checkbox");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
//let dots = document.querySelectorAll(".button span");
let i = 0;
let count =0
//Next Function
function nextBlock(){
    imgs[count].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "center"
    })
}
function nextgo(){
    if (count < imgs.length - 1) {
        count++;
        nextBlock()
    } else if (count === imgs.length - 1) {
        count=0;
        nextBlock()
    }
}
//Previous Function
function prevBlock(){
        imgs[count].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
}
function prevgo(){
    if (count > 0) {
        count--;
        prevBlock();
    }else if (count === 0) {
        count=imgs.length-1;
        prevBlock()
    }
}
//Next Button
next.addEventListener("click", () => {
    nextgo();
});

//Previous Button
prev.addEventListener("click", () => {
    prevgo();
});

//Auto Scrolll check
checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        nextgo();
        scroll = setInterval(nextgo, 2000);
    }
    else {
        clearInterval(scroll)
    }
});

