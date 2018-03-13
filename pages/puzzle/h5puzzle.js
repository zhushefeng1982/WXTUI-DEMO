class Puzzle {
  constructor(page, opts) {
    opts = opts || {};
    this.page = page;
    this.type = opts.type || 3;

    this.init();
  }
  init(){
    this.typeArr = [];
    this.initTypeArr();
    console.log(this.typeArr)
  }
  initTypeArr(){
    let arr = [],count = 0;
    for(let i = 0; i < this.type; i++){
      arr[i] = [];
      for(let j = 0; j < this.type; j++){
        arr[i].push({
          x: j,
          y: i,
          count: count
        });
        count++;
      }
    }
    this.typeArr = arr;
  }
}
module.exports = Puzzle; 