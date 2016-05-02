
function CenteredPanZoom(options){
  this.width = options.width;
  this.height = options.height;
  this.translate = options.translate || {x: 0, y: 0};
  this.scale = options.scale || 1;
}

CenteredPanZoom.prototype.pan = function(options){
  var start = options.start;
  var end = options.end;
  this.translate = {
    x: this.translate.x + (end.x - start.x),
    y: this.translate.y + (end.y - start.y)
  };
};

CenteredPanZoom.prototype.zoom = function(scale, center){
  var oldWidth = this.scale * this.width;
  var oldHeight = this.scale * this.height;
  var newWidth = scale * this.width;
  var newHeight = scale * this.height;
  var deltaWidth = (newWidth - oldWidth);
  var deltaHeight = (newHeight - oldHeight);

  var offsetX = this.translate.x / (this.width * this.scale);
  var offsetY = this.translate.y / (this.height * this.scale);

  var cx = center.x / this.width - offsetX;
  var cy = center.y / this.height - offsetY;
  this.translate = {
    x: (this.translate.x + deltaWidth / 2) - deltaWidth * cx,
    y: (this.translate.y + deltaHeight / 2) - deltaHeight * cy
  };
  this.scale = scale;
};

module.exports = CenteredPanZoom;
