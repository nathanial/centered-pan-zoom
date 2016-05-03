var Viewport = require('./Viewport.js');

function CenteredPanZoom(options){
  this.screen = new Viewport({
    x: 0,
    y: 0,
    width: options.screenWidth,
    height: options.screenHeight
  });
  this.viewport = new Viewport({
    x: 0,
    y: 0,
    width: options.screenWidth,
    height: options.screenHeight
  });
  this.scale = options.scale || 1;
}

CenteredPanZoom.prototype.pan = function(screenX,screenY){
  this.viewport.x += screenX;
  this.viewport.y += screenY;
};

CenteredPanZoom.prototype.panFrom = function(screenStart, screenEnd){
  this.pan(screenEnd.x - screenStart.x, screenEnd.y - screenStart.y);
};

//find zoom point in pre-zoom viewport
//make that point the same in the post-zoom viewport
CenteredPanZoom.prototype.zoom = function(scale, screenCenter){
  const v1 = Viewport.convert(screenCenter, {from: this.screen, to: this.viewport});
  this.viewport.x = this.viewport.x * (scale/this.scale);
  this.viewport.y = this.viewport.y * (scale/this.scale);
  this.viewport.width = this.screen.width * scale;
  this.viewport.height = this.screen.height * scale;
  this.scale = scale;

  const v2 = Viewport.convert(screenCenter, {from: this.screen, to: this.viewport});
  const deltaX = v2.x - v1.x;
  const deltaY = v2.y - v1.y;
  this.viewport.x += deltaX * scale;
  this.viewport.y += deltaY * scale;
};

module.exports = CenteredPanZoom;
