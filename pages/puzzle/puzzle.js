const Puzzle = require("./h5puzzle.js");
Page({
  onLoad(){
    this.puzzle = new Puzzle(this,{
      type: 3
    });
  }
})