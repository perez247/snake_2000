import document from "document";
import { Names } from "./constants"


export class Dom {
      // homeScreen = document.getElementById("homeScreen");
      // coordScreen = document.getElementById("coordScreen");
      // gameScreen = document.getElementById("gameScreen");

      get screens() {
        return {
          homeScreen : document.getElementById(Names.screens.homeScreen),
          coordScreen : document.getElementById(Names.screens.coordScreen),
          gameScreen : document.getElementById(Names.screens.gameScreen),
          gameMenuScreen : document.getElementById(Names.screens.gameMenuScreen),
          exitGameScreen: document.getElementById(Names.screens.exitGameScreen),
          gamePage: document.getElementById(Names.otherScreens.gamePage),
        };
      }
  
      get buttons() {
        return {
          startGame : document.getElementById(Names.buttons.startGame),
          saveCoords : document.getElementById(Names.buttons.saveCoords),
          gameMenu : document.getElementById(Names.buttons.gameMenu),
          btnCancel : document.getElementById(Names.buttons.btnCancel),
          btnRetry : document.getElementById(Names.buttons.btnRetry),
          btnExit : document.getElementById(Names.buttons.btnExit),
          btnYes : document.getElementById(Names.buttons.btnYes),
          btnNo : document.getElementById(Names.buttons.btnNo),
        };
      }
  
      get otherScreens() {
        return {
          gameMenuSvg : document.getElementById(Names.otherScreens.gameMenuSvg),
        }
      }
  
      get objects() {
        return {
          player: document.getElementById(Names.objects.player),
          fruit: document.getElementById(Names.objects.fruit)
        }
      }
}


// export function Screens() {
//   return {
//       homeScreen : "hello"
//   }
// }

// export function Screens() {
//   return {
//       homeScreen : document.getElementById("homeScreen"),
//       coordScreen : document.getElementById("coordScreen"),
//       gameScreen : document.getElementById("gameScreen"),
//   }
// }