
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

module.exports = CenteredPanZoom;
