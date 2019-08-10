class OverScene{
    /*
     * constrcutor { OverScene } 游戏结束场景
     * param { ctx: Context } 绘图环境
     * */
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        // 为了防止影响全局状态，所以先save再restore
        this.ctx.save();

        this.ctx.fillStyle = 'rgba( 100, 100, 100, 0.8 )';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = 'red';
        this.ctx.font = '900 40px 微软雅黑';
        this.ctx.fillText('GAME OVER!!!', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);

        this.ctx.restore();
    };
}
export default OverScene;