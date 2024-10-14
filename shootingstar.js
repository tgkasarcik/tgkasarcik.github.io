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

        // Move shooting stars that are close to the mouse toward it
        let distToMouse = dist(this.position.x, this.position.y, mouseX, mouseY);
        if (distToMouse < 250) {
            let toMouse = createVector(mouseX - this.position.x, mouseY - this.position.y);
            
            // Move toward mouse with velocity inversely porportional to the dist from mouse
            // Only move in x direction, so stars always continue moving upwards and do not get stuck around mouse forever
            this.position.x += toMouse.x * 1 / distToMouse;
        }

        // move to bottom of screen after going off top
        if (this.position.y <= 0) {
            this.position.y = windowHeight;
            this.position.x = random(0, windowWidth);
        }
    }

    // Not currently used
    scroll(deltaY) {

        // this.position.y += this.direction.y * (this.velocity * deltaY/100);
        this.position.y = lerp(this.position.y, this.direction.y * (this.velocity * deltaY/100), 0.02);

        // move to bottom of screen after going off top
        if (this.position.y <= 0) {
            this.position.y = windowHeight;
            this.position.x = random(0, windowWidth);
        }

        //TODO add similar logic for going off bottom of screen
    }

    draw() {
        push();
        noStroke();
        fill(271, map(76, 0, 100, 0, 360), map(82, 0, 100, 0, 360));
        circle(this.position.x, this.position.y, this.diameter);
        pop();
    }
}