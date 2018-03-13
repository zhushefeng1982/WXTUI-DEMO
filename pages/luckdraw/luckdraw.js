const Luck = require("./luck.js");
Page({
  data:{
    width: '',
    height: ''
  },
  onLoad(){
    this.luck = new Luck(this);
  }
})