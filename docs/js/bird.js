
class Bird {
    /*
     * constructor { Bird } 鸟构造函数
     * param { ctx: Context } 绘图环境
     * param { img: Image } 鸟图
     * param { widthFrame: number } 一排的帧数
     * param { heightFrame: number } 一列的帧数
     * param { x: number } 鸟的起始x轴坐标
     * param { y: number } 鸟的起始y轴坐标
     * */
    constructor(ctx, img, widthFrame, heightFrame, x, y) {

        this.ctx = ctx;
        this.img = img;
        this.widthFrame = widthFrame;
        this.heightFrame = heightFrame;
        this.x = x;
        this.y = y;

        // 一个小鸟的宽和高
        this.width = this.img.width / this.widthFrame;
        this.height = this.img.height / this.heightFrame;

        // 当前小鸟渲染的帧数
        this.currentFrame = 0;

        // 小鸟的下落速度
        this.speed = 2;

        //小鸟的方向  0向上  1向下
        this.direction = 1;
        // 加速度
        this.speedPlus = 0.05;

        // 绑定事件
        this._bind();
    }

    // 绘制鸟
    draw() {
        this.ctx.save();
        this.ctx.drawImage(this.img,
            this.width * this.currentFrame, 0, this.width, this.height,
            this.x, this.y, this.width, this.height);

        this.ctx.restore();
    }

    // 计算下一帧绘制时的数据
    update() {
        // 绘制下一帧
        this.currentFrame = ++this.currentFrame >= this.widthFrame ? 0 : this.currentFrame;
        switch (this.direction) {
            case 0:
                this.y -= this.speed;
                break;
            case 1:
                this.y += this.speed;
                break;
        }
    }
    // 绑定事件
    _bind() {
        var self = this;
        document.addEventListener('keydown', function (code) {
            switch (code.keyCode) {
                case 38:
                    self.direction = 0;
                    break;
                case 40:
                    self.direction = 1;
            }
        })
    }
}
let bird = null;
let getBird = function (ctx, img, widthFrame, heightFrame, x, y) {
    if (!bird) {
        bird = new Bird(ctx, img, widthFrame, heightFrame, x, y)
    }
    return bird;
}
export default getBird;