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
        if (distToMouse < 100) {
            let toMouse = createVector(mouseX - this.position.x, mouseY - this.position.y);
            
            // Move toward mouse with velocity inversely porportional to the dist from mouse
            this.position.x += toMouse.x * 1 / distToMouse;
            this.position.y += toMouse.y * 1 / distToMouse;

            print(distToMouse);
        }

        // move to bottom of screen after going off top
        if (this.position.y <= 0) {
            this.position.y = windowHeight;
            this.position.x = random(0, windowWidth);
        }
    }

    draw() {
        push();
        noStroke();

        let s = map(window.scrollY, 0, 2000, 155, 360);      //TODO figure out actual document height and replace 2000 with it
        fill(34, s, 324);
        circle(this.position.x, this.position.y, this.diameter);
        pop();
    }
}