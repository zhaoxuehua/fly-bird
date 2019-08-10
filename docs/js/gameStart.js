class StartScene {
    /*
     * constrcutor { StartScene } 游戏开始场景
     * param { ctx: Context } 绘图环境
     * */
    constructor(ctx, fn) {
        this.ctx = ctx;
        this.fn = fn;
        this._bind(fn);
    }
    _bind(fn) {
        var self = this;
        this.ctx.canvas.addEventListener('click', function () {
            self.fn();
        })
    }
    draw() {
        this.ctx.save();
        this.ctx.fillStyle = 'rgba( 100, 100, 100, 0.8 )';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = 'blue';
        this.ctx.font = '900 40px 微软雅黑';
        this.ctx.fillText('GAME START', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);

        this.ctx.restore();
    };
}

let start = function (ctx, fn) {
   return  new StartScene(ctx, fn);
}
export default start;