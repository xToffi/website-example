export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.heigth = 20;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.heigth - 10
        }
    }


    draw(ctx) {
        ctx.fillStyle = '#0ff'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}