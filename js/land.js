/*
     * constrcutor { Land } 大地
     * param { ctx: Context } 绘图环境
     * param { img: Image } 绘制的图像资源
     * param { speed: number } 速度
     * */
class Land {
    constructor(ctx, img, speed) {
        this.ctx = ctx;
        this.img = img;
        this.speed = speed || 2;    
        window.LandLen++;
        this.x = this.img.width * (window.LandLen - 1);
        this.y = this.ctx.canvas.height - this.img.height;
    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }

    update() {
        this.x -= this.speed;
        this.x += this.x <= -this.img.width ? this.img.width * window.LandLen : 0;
    }
}
window.LandLen = 0;
export default Land;
