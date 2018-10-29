const Base = require('./Base');
class Zad2 extends Base {
  constructor() {
    super();
    this.zIndex = [];
    this.zData = [];
    this.vIndex = [];
    this.vData = [];
    this.trace1 = {
      x: this.zIndex,
      y: this.zData,
      type: 'scatter'
    };
    this.trace2 = {
      x: this.vIndex,
      y: this.vData,
      type: 'scatter'
    };
    this.figure1 = { data: [this.trace1] };
    this.figure2 = { data: [this.trace2] };
  }
  y(n) {
    const { fs } = this;
    return Math.sin(8 * Math.PI * (n / fs) * Math.cos(10 * n));
  }
  z(n) {
    return this.y(n) - 3000 * Math.abs(this.x(n));
  }
  v(n) {
    return this.x(n) * (Math.abs(this.y(n)) + 2.6) * (this.x(n) - this.y(n));
  }
  countZ() {
    const { zIndex, zData } = this;
    for (let i = 0; i < 100; i++) {
      zIndex.push(i);
      zData.push(this.z(i));
    }
  }
  countV() {
    const { vIndex, vData } = this;
    for (let i = 0; i < 100; i++) {
      vIndex.push(i);
      vData.push(this.v(i));
    }
  }
  init() {
    const { figure1, figure2, imgOpts, zData, vData } = this;
    this.countZ();
    this.countV();
    this.printPNG(figure1, imgOpts, 'charts/zad2-a.png');
    this.printPNG(figure2, imgOpts, 'charts/zad2-b.png');
    this.printData('data/zad2-a.txt', zData);
    this.printData('data/zad2-b.txt', vData);
  }
}

const zad2 = new Zad2();
zad2.init();
