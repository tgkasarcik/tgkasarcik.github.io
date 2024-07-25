class ShootingStar {
    constructor (position, direction, velocity, diameter) {
        this.position = position;
        this.direction = direction;
        this.velocity = velocity;
        this.diameter = diameter;
    }

    update() {
        this.position.x += this.direction.x * this.velocity;
        this.position.y += this.direction.y * this.velocity;

        // move to bottom of screen after going off
        if (this.position.y <= 0) {
            this.position.y = windowHeight;
            this.position.x = random(0, windowWidth);
        }
    }

    draw() {
        push();
        noStroke();
        fill(34, 155, 324);
        circle(this.position.x, this.position.y, this.diameter);
        pop();
    }
}