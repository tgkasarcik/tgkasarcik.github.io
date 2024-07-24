class ShootingStar {
    constructor (position, velocity) {
        this.position = position;
        this.velocity = velocity;
    }

    update() {

    }

    draw() {
        push();
        circle(this.position.x, this.position.y, 10);
        pop();
    }
}