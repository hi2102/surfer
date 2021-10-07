// 보일러 코드
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.seaWidth = document.body.clientWidth;
    this.seaHeight = document.body.clientHeight;

    // 레티나 디스플레이를 위한 설정
    this.canvas.width = this.seaWidth * 2;
    this.canvas.height = this.seaHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.seaWidth, this.seaHeight);
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.seaWidth / 2, this.seaHeight / 2, this.seaWidth / 2 + this.seaHeight / 6, this.seaWidth / 2 + this.seaHeight / 6);
  }
}

window.onload = () => {
  new App();
}