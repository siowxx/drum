var randomNum = Math.floor(Math.random() * document.getElementsByClassName("drum").length) //0-6 just nice.
for(let i = 0; i <= 6; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
      var first = this.innerHTML;
      makeSound(first);
      animation(first);
    })};


    document.addEventListener("keydown", function(){
        var second = event.key;
        makeSound(second);
        animation(second);
    });

    function makeSound(music){

        switch (music) {
            case "w":
                var tom1  = new Audio("sounds/tom-1.mp3");          
                tom1.play();  
        
                break;
        
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();  
        
                break;
            
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();  
            
                break;   
        
                case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();  
                
                break;
        
                case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();  
                    
                break;
        
                case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();  
                        
                break;
        
                case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();  
                            
                break;
        
                default: console.log(music);
                break;
    
        }
    }
    // alert("key was pressed");

        // dot represents all the buttons trigger by the 2 functions above.
        var animation = function(dot){
        // lets say its the "dot" key was triggered,
        // the only way to add a class to an element is throught using a class method as shown
        //as using ther is no other way of using getting the innerHTML of that element.
     var animaButton = document.querySelector("." + dot);
        // pressed is a class with CSS.
        // Adding a class of pressed to the "dot" buttton.
     animaButton.classList.add("pressed");
     
     setTimeout(() => {
        animaButton.classList.remove("pressed");

     }, 100);
        }; // set time out to have the pressed class removed.