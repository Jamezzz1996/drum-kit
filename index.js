let buttonClick = document.querySelectorAll(".drum").length;
for (i = 0; i<buttonClick; i++) {  
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    let ButtonInnerHTML = this.innerHTML;

    makeSound(ButtonInnerHTML);

    buttonAnimation(ButtonInnerHTML);
    

});

}


document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});




function makeSound(key) {

    switch (key) {
        case "w":
            let sounds1 = new Audio("sounds/crash.mp3");
            sounds1.play();
            break;
        case "a":
            let sounds2 = new Audio("sounds/kick-bass.mp3");
            sounds2.play();
            break;
        case "s":
            let sounds3 = new Audio("sounds/snare.mp3");
            sounds3.play();
            break;
        case "d":
            let sounds4 = new Audio("sounds/tom-1.mp3");
            sounds4.play();
            break;
        case "j":
            let sounds5 = new Audio("sounds/tom-2.mp3");
            sounds5.play();
            break;
        case "k":
            let sounds6 = new Audio("sounds/tom-3.mp3");
            sounds6.play();
            break;
        case "l":
            let sounds7 = new Audio("sounds/tom-4.mp3");
            sounds7.play();
            break;        
                                  
    
        default:
           
    }
    
}

    function buttonAnimation(currentKey) {
        
       let activeButton =  document.querySelector("." + currentKey);

       activeButton.classList.add("pressed");

       setTimeout(function () {
        activeButton.classList.remove("pressed");
       },100)
    }


