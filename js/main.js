class Sky {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  initCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.fillStyle = "#000000";
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  draw() {
    console.log("works");
    window.requestAnimationFrame(() => this.draw());
  }

  run() {
    this.initCanvas();
    this.draw();
  }
}

const sky = new Sky(document.querySelector("#canvas"));
sky.run();
