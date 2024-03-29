export class Surfer {
  constructor(img, seaWidth) {
    this.img = img;

    this.curFrame = 0;

    this.imgWidth  = 344; // 레티나 디스플레이를 위한 코드
    this.imgHeight = 276;

    this.surferWidth  = 172;
    this.surferHeight = 138;

    this.surferWidthHalf = this.surferWidth / 2;
    this.x = seaWidth + this.surferWidth;
    this.y = 0;
    this.speed = Math.random() * 2 + 1;
  }

  draw(ctx, t, dots) {
    this.animate(ctx, dots);
  }

  animate(ctx, dots) {
    // #22, 곡선위의 점 기울기 반영
    this.x -= this.speed;
    const closest = this.getY(this.x, dots);
    this.y = closest.y;

    ctx.save();
    ctx.translate(this.x, this.y); 
    ctx.rotate(closest.rotation);
    ctx.drawImage(
      this.img,
      this.imgWidth * this.curFrame,
      0,
      this.imgWidth,
      this.imgHeight,
      -this.surferWidthHalf,
      -this.surferHeight + 20,
      this.surferWidth,
      this.surferHeight,
    );
      ctx.restore();
  }

  // #16, 곡선위의 서버 좌표 구하기
  getQuadValue(p0, p1, p2, t) {
    return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
  }

  // #16, 곡선위의 서버 좌표 구하기
  getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {
    // #21, 곡선위의 점 기울기 구하기 위한 추가 코드
    const tx = this.quadTangent(x1, x2, x3, t);
    const ty = this.quadTangent(y1, y2, y3, t);
    const rotation = -Math.atan2(tx, ty) + (90 * Math.PI) / 180; 

    return {
      x: this.getQuadValue(x1, x2, x3, t),
      y: this.getQuadValue(y1, y2, y3, t),
      // #21, 곡선위의 점 기울기 구하기 위한 추가 코드
      rotation: rotation,
    };
  }

  // #17, 곡선의 x 값에 따른 Y 좌표 구하기
  getY(x, dots) {
    for(let i = 1; i < dots.length; i++) {
      if(x >= dots[i].x1 && x <= dots[i].x3) {
        return this.getY2(x, dots[i]);
      }
    }

    return {
      y: 0,
      rotation: 0,
    };
  }

    // #17, x값에 가까운 곡선의 좌표 구하기
    getY2(x, dot) {
      const total = 200;
      let pt = this.getPointOnQuad(
        dot.x1,
        dot.y1,
        dot.x2,
        dot.y2,
        dot.x3,
        dot.y3,
        0,
      );

      let prevX = pt.x;
      for(let i = 1; i < total; i++) {
        const t = i / total;
        pt = this.getPointOnQuad(
          dot.x1,
          dot.y1,
          dot.x2,
          dot.y2,
          dot.x3,
          dot.y3,
          t,
        );

        if(x >= prevX && x <= pt.x) {
          return pt;
        }
        prevX = pt.x;
      }
      return pt;
    }

    // #20, 곡선 위의 좌표에 해당하는 기울기 찾기
    quadTangent(a, b, c, t) {
      return 2 * (1 - t) * (b - a) + 2 * (c - b) * t;
    }
}
