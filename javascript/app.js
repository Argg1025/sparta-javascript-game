document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');


    // function randomColorGenerator() {
    //     return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`
    // }

    // Objects


    function Circle(x, y, dx, dy, radius, mass) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: dx,
            y: dy
        };
        this.radius = radius;
        this.mass = mass;

        circles.push(this);

        this.drawCircle = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = 'blue';
            c.fillStyle = 'green';
            c.fill();
            c.stroke();
        }

        this.update = function () {

            for (let i = 0; i < circles.length; i++) {
                if (this === circles[i]) continue;
                if (getDistance(this.x, this.y, circles[i].x, circles[i].y) <= this.radius + circles[i].radius) {

                    resolveCollisions(this, circles[i]);
                }
            }


            // Implemented the scoring function and collision detection against the boundaries for each circle here
            if (this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
                this.velocity.y = -this.velocity.y
            }
            if (this === circles[0]) {
                if (this.x + this.radius > innerWidth * 0.5 || this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x
                }
                if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                    this.velocity.y = -this.velocity.y
                }
            }
            if (this === circles[1]) {
                if (this.x + this.radius > innerWidth || this.x - this.radius < innerWidth - 0.5 * innerWidth) {
                    this.velocity.x = -this.velocity.x
                }
                if (this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
                    this.velocity.y = -this.velocity.y
                }
            }
            if (this === circles[2]) {
                if (this.x + this.radius > innerWidth) {
                    this.velocity.x = -this.velocity.x
                    player1Score += 1;
                    console.log(player1Score);
                    console.log(player2Score);
                }
                if (this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x
                    player2Score += 1;
                    console.log(player1Score);
                    console.log(player2Score);
                }



            }





            this.velocity.x = this.velocity.x;
            this.velocity.y = /*0.99* */ this.velocity.y;
            this.x += this.velocity.x;
            this.y += this.velocity.y;

        }

    }


    /*
    Rotates coordinate aystem for the velocities
    Will alter the velocities as if they were on a rotated coordinate system
    */
    function rotate(velocity, angle) {
        const rotationalVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)

        };
        return rotationalVelocities
    }

    /*
    This function provides the mathematical basis for elastic collisions (no loss of energy in the system) between any two circles
    */
    function resolveCollisions(circle1, circle2) {
        const xVelocityDiff = circle1.velocity.x - circle2.velocity.x;
        const yVelocityDiff = circle1.velocity.y - circle2.velocity.y;

        const xDist = circle2.x - circle1.x;
        const yDist = circle2.y - circle1.y;

        // Prevent Circles from overlapping
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

            // Get the angle between the two circles
            const angle = -Math.atan2(circle2.y - circle1.y, circle2.x - circle1.x);

            // Mass storage declarations for circles. Used in the collision equations
            const m1 = circle1.mass;
            const m2 = circle2.mass;

            // Initial velocity (prior to collision)
            const u1 = rotate(circle1.velocity, angle);
            const u2 = rotate(circle2.velocity, angle);

            // Velocities after the collision. This uses the One-dimensional Newtonian and takes into account the conservation of momentum between the circles during a collision
            const v1 = {
                x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2),
                y: u1.y
            };
            const v2 = {
                x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2),
                y: u2.y
            };

            // Final velocity after rotating back to original location
            const vFinal1 = rotate(v1, -angle);
            const vFinal2 = rotate(v2, -angle);

            // Swap circle velocities for bounce effect
            circle1.velocity.x = vFinal1.x;
            circle1.velocity.y = vFinal1.y;

            circle2.velocity.x = vFinal2.x;
            circle2.velocity.y = vFinal2.y;






        }
    }

    // Instantiating the circles
    let circles = [];
    const circle1 = new Circle(100, 100, 0, 0, 100, 20);
    const circle2 = new Circle(900, 300, 0, 0, 100, 20);
    const circle3 = new Circle(300, 400, -10, 5, 50, 1);




    // Initial declaration bool for keyboard controls
    let rightPressed = false,
        leftPressed = false,
        upPressed = false,
        downPressed = false,
        rightPressed2 = false,
        leftPressed2 = false,
        upPressed2 = false,
        downPressed2 = false;


    // Using an event listener to add controls for the circles velocity. Firstly, for pressing the button down.
    document.addEventListener('keydown', press)

    function press(e) {
        if (e.keyCode === 39 || e.keyCode === 68) {
            rightPressed = true;
        } else if (e.keyCode === 37 || e.keyCode === 65) {
            leftPressed = true;
        }
        if (e.keyCode === 40 || e.keyCode === 83) {
            downPressed = true;
        } else if (e.keyCode === 38 || e.keyCode === 87) {
            upPressed = true;
        }
    }

    document.addEventListener('keyup', unpress)

    function unpress(e) {
        if (e.keyCode === 39 || e.keyCode === 68) {
            rightPressed = false;
        } else if (e.keyCode === 37 || e.keyCode === 65) {
            leftPressed = false;
        }
        if (e.keyCode === 40 || e.keyCode === 83) {
            downPressed = false;
        } else if (e.keyCode === 38 || e.keyCode === 87) {
            upPressed = false;
        }
    }

    document.addEventListener('keydown', press2)
    // Player 2 controls
    function press2(e) {
        if (e.keyCode === 76) {
            rightPressed2 = true;
        } else if (e.keyCode === 74) {
            leftPressed2 = true;
        }
        if (e.keyCode === 75) {
            downPressed2 = true;
        } else if (e.keyCode === 73) {
            upPressed2 = true;
        }
    }

    document.addEventListener('keyup', unpress2)

    function unpress2(e) {
        if (e.keyCode === 76) {
            rightPressed2 = false;
        } else if (e.keyCode === 74) {
            leftPressed2 = false;
        }
        if (e.keyCode === 75) {
            downPressed2 = false;
        } else if (e.keyCode === 73) {
            upPressed2 = false;
        }
    }



    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        circle1.drawCircle();
        circle2.drawCircle();
        circle3.drawCircle();

        //Control Functionality. In this case it adds a velocity depending on which control is pressed. For player 1.

        // circle1.update();
        // circle2.update();
        // circle3.update();

        if (rightPressed) {

            circle1.velocity.x = 5;
            circle1.update();
        } else if (leftPressed) {

            circle1.velocity.x = -5;
            circle1.update();


        }
        if (downPressed) {

            circle1.velocity.y = 5;
            circle1.update();


        } else if (upPressed) {

            circle1.velocity.y = -5;
            circle1.update();

        } else {
            circle1.velocity.x = 0;
            circle1.velocity.y = 0;
            circle1.update();
            // score();


        }



        // Player 2 control functions
        if (rightPressed2) {

            circle2.velocity.x = 5;
            circle2.update();
        } else if (leftPressed2) {

            circle2.velocity.x = -5;
            circle2.update();


        }
        if (downPressed2) {

            circle2.velocity.y = 5;
            circle2.update();


        } else if (upPressed2) {

            circle2.velocity.y = -5;
            circle2.update();

        } else {
            circle2.velocity.x = 0;
            circle2.velocity.y = 0;
            circle2.update();

        }

        // circle1.update();
        circle2.update();
        circle3.update();




    };
    let player1Score = 0,
        player2Score = 0;

    // function score() {

    //     if (circle3.x + circle3.radius > innerWidth) {
    //         circle3.velocity.x = -circle3.velocity.x
    //         player2Score += 1;
    //         console.log(player1Score);
    //         console.log(player2Score);

    //     } else if (circle3.x - circle3.radius < 0) {

    //     }


    // }





    animate();


    function getDistance(x1, y1, x2, y2) {
        let xDist = x2 - x1;
        let yDist = y2 - y1;
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    }









}); //DOMContentLoaded End