var CenteredPanZoom = require('./CenteredPanZoom.js');

var assert = require('chai').assert;
describe('PanZoom', function() {
  describe('#pan() at scale x1', function () {
    it('should pan right', function(){
      var panner = new CenteredPanZoom({
        width: 100,
        height: 100
      });
      panner.pan({start:{x:0,y:0}, end: {x: 50, y: 0}});
      assert.deepEqual({x:50, y:0}, panner.translate);
      assert.deepEqual(1, panner.scale);
    });
    it("should pan right multiple times", function(){
      var panner = new CenteredPanZoom({
        width: 100,
        height: 100
      });
      panner.pan({start: {x:0,y:0}, end: {x:50, y:0}});
      panner.pan({start: {x:0,y:0}, end: {x:25, y:0}});
      assert.deepEqual({x:75, y:0}, panner.translate);
      assert.deepEqual(1, panner.scale);
    });
    it("should pan down and right", function(){
      var panner = new CenteredPanZoom({
        width: 100,
        height: 100
      });
      panner.pan({start: {x:50,y:50}, end: {x:60, y: 60}});
      assert.deepEqual({x:10, y:10}, panner.translate);
      assert.deepEqual(1, panner.scale);
    });
  });

  describe("#pan() at scale x2", function(){
    it("should pan right", function(){
      var panner = new CenteredPanZoom({width: 100, height: 100, scale: 2});
      panner.pan({start: {x: 0, y:0}, end: {x: 50, y:0}});
      assert.deepEqual({x: 50, y: 0}, panner.translate);
      assert.deepEqual(2, panner.scale);
    });
    it("should pan right multiple times", function(){
      var panner = new CenteredPanZoom({width: 100, height: 100, scale: 2});
      panner.pan({start: {x:0, y:0}, end: {x: 50, y:0}});
      panner.pan({start: {x:0, y:0}, end: {x: 50, y:0}});
      assert.deepEqual({x: 100, y:0}, panner.translate);
      assert.deepEqual(2, panner.scale);
    });
    it("should pan down and right", function(){
      var panner = new CenteredPanZoom({width: 100, height: 100, scale: 2});
      panner.pan({start: {x:50,y:50}, end: {x:60, y: 60}});
      assert.deepEqual({x:10, y:10}, panner.translate);
      assert.deepEqual(2, panner.scale);
    });
  })

  describe("#zoom() to x2", function(){
    it("should zoom in top-left corner", function(){
      var panner = new CenteredPanZoom({width: 100, height: 100});
      panner.zoom(2.0, {x: 50, y: 50})
      assert.deepEqual({x:-50, y:-50}, panner.translate);
      assert.deepEqual(2, panner.scale);
    });
  });

  describe("#zoom() to x0.5", function(){

  });
});
