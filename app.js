// 보일러 코드
import { Wave } from "./wave.js";
import { SurferController } from "./sufer-controller.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx    = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    // #4
    this.waves = [
      new Wave('#0b57a2', 0.3, 6, 0.4, 0.4),
      new Wave('#50d2f9', 0.6, 8, 0.3, 0.3),
      new Wave('#4295f2', 0.9, 10, 0.1, 0.6),
    ];

    // #11 서퍼 컨트롤러 추가
    this.surferController = new this.surferController();

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.seaWidth  = document.body.clientWidth;
    this.seaHeight = document.body.clientHeight;

    // 레티나 디스플레이를 위한 설정
    this.canvas.width  = this.seaWidth * 2;
    this.canvas.height = this.seaHeight * 2;
    this.ctx.scale(3, 3);

    // #4 웨이브를 그림
    for(let i = 0; i < this.waves.length; i++){
      this.waves[i].resize(this.seaWidth, this.seaHeight);
    }

    // #11 서퍼 컨트롤러 추가
    this.surferController.resize(this.seaWidth, this.seaHeight);

  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.seaWidth, this.seaHeight);
   
    // #4
    let dots;
    for ( let i = 0; i < this.waves.length; i++ ) {
      dots = this.waves[i].draw(this.ctx);
    }

    // #11 서퍼 컨트롤러 추가
    this.surferController.draw(this.ctx, t, dots);
  }
}

window.onload = () => {
  new App();
}