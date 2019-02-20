import document from "document";
import { Dom } from "./dom";
import { Functions } from "./functions/functions";
import { Names } from "./constants";
import { Data } from "./app-data";
import { me } from "appbit";


let AppDom = new Dom();
let AppFunctions = Functions();
let AppData = new Data();

// console.log(Names.screens.homeScreen);

// let screen1 = document.getElementById("screen1");
// let screen2 = document.getElementById("screen2");
// let screen3 = document.getElementById("screen3");

// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let button3 = document.getElementById("button3");

// function showScreen1() {
//   console.log("Show screen 1");
//   screen1.style.display = "inline";
//   screen2.style.display = "none";
//   screen3.style.display = "none";
// }

// function showScreen2() {
//   console.log("Show screen 2");
//   screen1.style.display = "none";
//   screen2.style.display = "inline";
//   screen3.style.display = "none";  
// }

// function showScreen3() {
//   console.log("Show screen 3");
//   screen1.style.display = "none";
//   screen2.style.display = "none";
//   screen3.style.display = "inline";
// }


// button1.onclick = function() {
//   showScreen2();
// }

// button2.onclick = function () {
//   showScreen3();
// }

// button3.onclick = function() {
//   showScreen1();
// }


document.onkeypress = function(evt) {
  if (evt.key === "back") {
    if (screen3.style.display === "inline") {
      // Go to screen 2
      showScreen2();
      evt.preventDefault();
    } else if (screen2.style.display === "inline") {
      // Go to screen 1
      showScreen1();
      evt.preventDefault();
    } else if (screen1.style.display === "inline") {
      // Default behaviour to exit the app
    }
  }
}

// ------- Real Code

// Register buttons 

  AppDom.buttons.startGame.onclick = function() {
    getCoords();
  }
  
  AppDom.buttons.saveCoords.onclick = function() {
    
    AppFunctions.savePosition();
    
    AppDom.buttons.saveCoords.text = `Pick point 2`;
    
    if(AppFunctions.locations().length == 2) {
      AppFunctions.displayScreen(Names.screens.gameScreen);
      
      //Initiate game here and save points;
      
      //Check if position are far apart enough
      if(!AppFunctions.calculateDistance()) {
        getCoords();
        return;
      }
      
      
      // console.log(JSON.stringify(AppFunctions.locations()));
      //
      AppFunctions.configureParams();
      AppFunctions.startGame();
    }
    
  }
  
  
  AppDom.buttons.gameMenu.onclick = function() {
    AppFunctions.displayScreen(Names.screens.gameMenuScreen);
  }
  
  
  // --------------------- Game Menu Buttons
  
  // -------Cancel button
  
  AppDom.buttons.btnCancel.onclick = function() {
    AppFunctions.displayScreen(Names.screens.gameScreen);
  }
  
  // -------Retry button
  
   AppDom.buttons.btnRetry.onclick = function() {
    getCoords();
  }
   
  // -------Exit button
   
  AppDom.buttons.btnExit.onclick = function() {
    AppFunctions.clearScreen();
    AppDom.screens.exitGameScreen.style.display = 'inline';
  }
  
  // ---------------------- Exit confirmation buttons
  
  // ----------- Yes button to exit game
  
  AppDom.buttons.btnYes.onclick = function() {
    me.exit();
  }
  
  // ------------ No button to go back to game
  
  AppDom.buttons.btnNo.onclick = function() {
    AppFunctions.displayScreen(Names.screens.gameMenuScreen);
  }
    
  // -------- Other Functions 
   
  function getCoords() {
    AppFunctions.displayScreen(Names.screens.coordScreen);
    AppDom.buttons.saveCoords.text = `Pick point 1`;
    AppFunctions.trackPosition();
    AppFunctions.resetLocation();
  }
