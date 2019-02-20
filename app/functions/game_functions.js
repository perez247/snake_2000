import { Dom } from "./../dom";

export class GameFunctions {
  
  constructor(data) {
    this.appDom = new Dom();
    this.data = data;
    this.setParams();
  }
  
  setParams() {
    let firstPosition = this.data.locations[0];
    let secondPosition = this.data.locations[1];

    this.data.screen.y1.gps = firstPosition.latitude < secondPosition.latitude ? secondPosition.latitude : firstPosition.latitude;

    this.data.screen.y2.gps = firstPosition.latitude > secondPosition.latitude ? secondPosition.latitude : firstPosition.latitude;

    this.data.screen.x1.gps = firstPosition.longitude < secondPosition.longitude ? firstPosition.longitude : secondPosition.longitude;

    this.data.screen.x2.gps = firstPosition.longitude > secondPosition.longitude ? firstPosition.longitude : secondPosition.longitude;

    this.data.screen.x1.gps = parseFloat(this.data.screen.x1.gps).toFixed(6);
    this.data.screen.x2.gps = parseFloat(this.data.screen.x2.gps).toFixed(6);

    this.data.screen.y1.gps = parseFloat(this.data.screen.y1.gps).toFixed(6);
    this.data.screen.y2.gps = parseFloat(this.data.screen.y2.gps).toFixed(6);

    this.data.screen.x2.size = (this.data.screen.x2.gps - this.data.screen.x1.gps).toFixed(6);
    this.data.screen.y2.size = (this.data.screen.y2.gps - this.data.screen.y1.gps).toFixed(6);

    this.data.screen.x2.ratio = (this.data.screen.x2.size / this.data.screen.x2.device).toFixed(7);
    this.data.screen.y2.ratio = (this.data.screen.y2.size / this.data.screen.y2.device).toFixed(7);
    
    this.setFruit();
  }
 
  getRandomNumber(maxValue) {
    let d = new Date();
    return ( ((d.getHours() + 1) * (d.getMinutes() + 1) * (d.getSeconds() + 1) * d.getMilliseconds() ) % maxValue);
  }
  
  setPlayerOnDevice(x_device, y_device) {
    this.appDom.objects.player.x = x_device;
    this.appDom.objects.player.y = y_device
  }
  
  setFruit(randx, randy) {
    const randx = this.getRandomNumber(this.data.screen.x2.device);
    const randy = this.getRandomNumber(this.data.screen.y2.device);
    
    this.data.fruit.x = randx;
    this.data.fruit.y = randy;
    
    this.appDom.objects.fruit.x = randx;
    this.appDom.objects.fruit.y = randy;
  }
    
  checkFruit(xpos, ypos) {
    let xp = Math.abs(xpos - this.data.fruit.x);
    let yp = Math.abs(ypos - this.data.fruit.y);
    
    if(xp <= 7 && yp <= 7) {return true;}
    
    return false;
  }
  
  setPosition = function(yInput, xInput) {
    let x_gps = parseFloat(xInput).toFixed(6);
    let y_gps = parseFloat(yInput).toFixed(6);
    
    let xPoint = (x_gps - this.data.screen.x1.gps).toFixed(6);
    let yPoint = (y_gps - this.data.screen.y1.gps).toFixed(6);
    
    if (xPoint > this.data.screen.x2.size || yPoint > this.data.screen.y2.size){
      return;
    }
    
    let x_device = Math.floor(xPoint / this.data.screen.x2.ratio);
    let y_device = Math.floor(yPoint / this.data.screen.y2.ratio);
    
    this.setPlayerOnDevice(x_device, y_device);
    
    if(this.checkFruit(x_device, y_device)) {
      this.setFruit();
    }
  }
  
}
  
