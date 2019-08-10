/*
     * 绘制背景
     * construcotor { Sky } 背景构造函数
     * parasm { ctx: Context } 绘制环境
     * parasm { img: Image } 背景图像
     * parasm { speed: number } 背景速度
     * */
class Sky {
    constructor(ctx, img, speed) {
        this.ctx = ctx;
        this.img = img;
        this.width = this.img.width;
        this.height = this.img.height;
        this.speed = speed || 2;
        window.SkyLen++;
        this.x = this.width * (window.SkyLen - 1);
        this.y = 0;
    }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }

    update() {
        this.x -= this.speed;
        if (this.x <= -this.width) {
            this.x += this.width * window.SkyLen;
        }
    }
}
window.SkyLen = 0;
export default Sky;

