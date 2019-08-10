import Land from './land.js'
import getBird from "./bird.js"
import Pipe from "./pipe.js"
import Sky from "./sky.js"
class GameScene {
    constructor(ctx, imgObj) {
        this.ctx = ctx;
        this.imgObj = imgObj;

        this.listeners = [];
        this.roles = [];

        this._initRoles();
    }
    
    _initRoles() {
        this.roles.push(new Sky(this.ctx, this.imgObj.sky, 3));
        this.roles.push(new Sky(this.ctx, this.imgObj.sky, 3));
        for (var i = 0; i < 6; i++) {
            this.roles.push(new Pipe(this.ctx, this.imgObj.pipeDown, this.imgObj.pipeUp, 150, this.imgObj.land.height, 3));
        }
        for (var i = 0; i < 4; i++) {
            this.roles.push(new Land(this.ctx, this.imgObj.land, 3));
        }
        this.roles.push(getBird(this.ctx, this.imgObj.bird, 3, 1, 10, 10));
    }
    draw() {
        var bird = getBird();
        var birdCoreX = bird.x + bird.width / 2;
        var birdCoreY = bird.y + bird.height / 2;

        if (this.ctx.isPointInPath(birdCoreX, birdCoreY) || birdCoreY < 0|| birdCoreY > (this.ctx.canvas.height - this.imgObj.land.height)) {
            this.triggerBirdOver();
        }else{
            this.ctx.beginPath();
            this.roles.forEach(function (role) {
                role.draw();
                role.update();
            });
        }
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    triggerBirdOver() {
        this.listeners.forEach(function (liste) {
            liste();
        });
    }
}
export default GameScene