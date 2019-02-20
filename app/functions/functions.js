
import document from 'document';
import { Names } from "./../constants";
import { geolocation } from "geolocation";
import { Data } from "./../app-data";
import { Dom } from "./../dom";
import { GameFunctions } from "./game_functions";
import { getRandomValues } from "crypto";

// export class Functions {
  
//   constructor() {
//     this.watchId = null;
//     this.latitude = null;
//     this.longitude = null;
//   }

//   positions() {
//     console.log(this.latitude,this.longitude
//     );
//     // return this.latitude;
//   }
  
//   displayScreen(screenName = Names.screens.homeScreen) {
//     this.clearScreen();
//     document.getElementById(Names.screens[screenName]).style.display = 'inline';
    
//   }

//   trackPosition() {
//     this.watchId = geolocation.watchPosition(this.locationSuccess, this.locationError);
//   }

//   locationSuccess(position) {
//     this.latitude = position.coords.latitude +'';
//     this.longitude = position.coords.longitude +'';
//     // console.log(this.latitude);
//   }

//   clearScreen() {
//        for( var screenNameProp in Names.screens){
//       document.getElementById(Names.screens[screenNameProp]).style.display = 'none';
//       // console.log(screenName);
//     }
//   }

//   calculateDistance(data) {
//      console.log(JSON.stringify(data[0]));
//   }
  
  
// }

export const Functions = function() {
  let data = new Data();
  let appDom = new Dom();
  let save = true;
  let gameFunctions = null;
 
  return {
    
    locations: function() {
      return data.locations;
    },
    
    resetLocation: function() {
      data.locations.length = 0;
    },
    
    displayScreen: function(screenName = Names.screens.homeScreen) {
      this.clearScreen();
      document.getElementById(Names.screens[screenName]).style.display = 'inline';
    },
    
    trackPosition: function() {
        data.watchId = geolocation.watchPosition(this.locationSuccess, this.locationError);
    },
    
    locationSuccess: function(position) {
      data.latitude = position.coords.latitude +'';
      data.longitude = position.coords.longitude +'';
      
      // If saving the coords on intial config
      if(!save) {
        
        gameFunctions.setPosition(position.coords.latitude, position.coords.longitude)
        // playGame();
      }
    },
    
    savePosition: function() {
      data.locations.push({latitude: data.latitude, longitude: data.longitude});
      // console.log(JSON.stringify(data.locations));
    },
    
    locationError: function(error) {
       console.log(error);
    },
    
     clearScreen: function() {
       for( var screenNameProp in Names.screens){
        document.getElementById(Names.screens[screenNameProp]).style.display = 'none';
        // console.log(screenName);
       }
     },
    
     calculateDistance: function() {
        let y = Math.abs(data.locations[0].latitude - data.locations[1].latitude);
       
        let x = Math.abs(data.locations[0].longitude - data.locations[1].longitude);
       
        return (x>= 0.0001 && y>= 0.0001) ? true : false;
       
        
        // console.log(x,y);
     },
    
    configureParams: function() {
      gameFunctions = new GameFunctions(data);
    },
  
    startGame: function() {
      save = false;
    }
  }
}