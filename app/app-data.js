

export class Data {
  
  watchId = null;
  latitude = null;
  longitude = null;
  x = null;
  y = null;
  xScreen = 340;
  yScreen = 242;
  locations = [];

  fruit = {
    x: 0,
    y: 0
  };

  point = 0;
  numberOfRuns = 15;

  //  

  screen = {
    x1 : {
      device : 0,
      gps : 0,
    },
    
    y1 : {
      device : 0,
      gps : 0
    },
    
    x2 : {
      device : 348,
      gps : 0,
      size: 0,
      ratio: 1,
    },
    
    y2 : {
      device : 250,
      gps : 0,
      size: 0,
      ratio: 1
    }
  }
}