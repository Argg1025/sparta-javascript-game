document.addEventListener("DOMContentLoaded", function () {

    const canvas = document.querySelector('canvas');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const c = canvas.getContext('2d');
    const d = canvas.getContext('2d');
    const e = canvas.getContext('2d');
    const f = canvas.getContext('2d');

    const player1 = 'Player 1',
        player2 = 'Player 2';
    // function randomColorGenerator() {
    //     return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`
    // }

    // Objects


    function drawRink() {




        d.beginPath();
        d.strokeStyle = 'red';
        d.lineWidth = 10;
        d.arc(0.5 * innerWidth, 0.5 * innerHeight, 200, 0, 2 * Math.PI, false);
        d.stroke();

        // 

        d.beginPath();
        d.strokeStyle = 'blue';
        d.arc(innerWidth, 0.5 * innerHeight, 200, 0, 2 * Math.PI, false);
        d.stroke();
        d.closePath();

        d.beginPath();
        d.arc(0, 0.5 * innerHeight, 200, 0, 2 * Math.PI, false);
        d.stroke();
        d.closePath();

        d.beginPath();
        d.moveTo(0.5 * innerWidth, 0);
        d.lineTo(0.5 * innerWidth, innerHeight);
        d.stroke();





    }

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
            c.lineWidth = 0.01;
            c.fillStyle = 'green';
            c.globalCompositeOperation = 'destination-over';
            c.fill();
            c.stroke();
        }



        // Drawing on the air hockey rink with canvas

        this.update = function () {




            // Implemented the scoring function and collision detection against the boundaries for each circle here
            if (this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
                this.velocity.y = -this.velocity.y
            }
            if (this === circles[0]) {
                // if (getDistance(circle1.x, circle1.y, circle3.x, circle3.y) >= circle1.radius + circle3.radius) {
                //     resolveCollisions(circle1, circle3);
                // }
                if (this.velocity.x > 5) {
                    this.velocity.x = 5;
                }

                if (this.velocity.y > 5) {
                    this.velocity.y = 5;
                }
                if (this.velocity.y < -5) {
                    this.velocity.y = -5;
                }
                if (this.velocity.x < -5) {
                    this.velocity.x = -5;
                }

                if (this.y < this.radius) {
                    this.y = this.radius + 10
                    this.velocity.y = 0;
                    // this.y = innerHeight - this.radius;
                }
                if (this.y + this.radius > innerHeight) {
                    this.y = innerHeight - this.radius - 10;
                    this.velocity.y = 0;
                }
                if (this.x - this.radius < 0) {
                    this.x = this.radius + 10
                    this.velocity.x = 0;
                }
                if (this.x + this.radius > innerWidth * 0.5) {
                    this.x = innerWidth * 0.5 - this.radius - 10;
                    this.velocity.x = 0;
                }

                if (this.x + this.radius > innerWidth * 0.5 || this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x;

                }

            }
            if (this === circles[1]) {

                // if (getDistance(circle2.x, circle2.y, circle3.x, circle3.y) >= circle2.radius + circle3.radius) {
                //     resolveCollisions(circle2, circle3);
                // }

                if (this.velocity.x > 5) {
                    this.velocity.x = 5;
                }

                if (this.velocity.y > 5) {
                    this.velocity.y = 5;
                }
                if (this.velocity.y < -5) {
                    this.velocity.y = -5;
                }
                if (this.velocity.x < -5) {
                    this.velocity.x = -5;
                }
                if (this.y - this.radius < 0) {
                    this.velocity.y = 0;
                }
                if (this.y + this.radius > innerHeight - 5) {
                    this.velocity.y = 0;
                }
                if (this.x - this.radius < innerWidth * 0.5) {
                    this.x = innerWidth * 0.5 + 10 + this.radius;
                    this.velocity.x = 0;
                }
                if (this.x + this.radius > innerWidth - 5) {
                    this.x = innerWidth - 10 - this.radius;
                    this.velocity.x = 0;
                }
                if (this.x + this.radius > innerWidth || this.x - this.radius < innerWidth - 0.5 * innerWidth) {
                    this.velocity.x = -this.velocity.x
                }

            }
            if (this === circles[2]) {
                if (this.x + this.radius > innerWidth - 5 && (this.y - this.radius > 0.5 * innerHeight - 200 && this.y + this.radius < 0.5 * innerHeight + 200)) {
                    player1Score += 1;
                    this.x = 0.5 * innerWidth;
                    this.y = 0.5 * innerHeight;
                    this.velocity.x = 3;
                    this.velocity.y = 1;
                }

                if (this.x - this.radius < 5 && (this.y - this.radius > 0.5 * innerHeight - 200 && this.y + this.radius < 0.5 * innerHeight + 200)) {
                    player2Score += 1;
                    this.x = 0.5 * innerWidth;
                    this.y = 0.5 * innerHeight;
                    this.velocity.x = -3;
                    this.velocity.y = 1;
                }


                if (this.velocity.x > 10) {
                    this.velocity.x = 10;
                }

                if (this.velocity.y > 10) {
                    this.velocity.y = 10;
                }
                if (this.velocity.y < -10) {
                    this.velocity.y = -10;
                }
                if (this.velocity.x < -10) {
                    this.velocity.x = -10;
                }
                if (this.y - this.radius < 0) {
                    this.y = this.radius + 10;
                }
                if (this.y + this.radius > innerHeight) {
                    this.y = innerHeight - this.radius - 10;
                }
                if (this.x - this.radius < 0) {
                    this.x = this.radius + 5;
                    this.velocity.x = -this.velocity.x
                }
                if (this.x + this.radius > innerWidth) {
                    this.x = innerWidth - this.radius - 5;
                    this.velocity.x = -this.velocity.x
                }
                // if (this.x + this.radius > innerWidth && (this.y - this.radius > innerHeight * 0.5 - 200 || this.y + this.radius < innerHeight * 0.5 + 200)) {
                //     this.velocity.x = -this.velocity.x
                //     player1Score += 1;
                //     // this.x = circle2.x - circle3.radius;
                //     // this.y = circle2.y;
                //     this.velocity.x = -10;
                //     if (this.y > circle2.y) {
                //         this.velocity.y = 5;
                //     } else {
                //         this.velocity.y = -5;
                //     }



                // }
                if (this.x - this.radius < 0) {
                    this.velocity.x = -this.velocity.x
                    player2Score += 1;
                    // this.x = circle1.x + circle3.radius;
                    // this.y = circle1.y;
                    this.velocity.x = 10;
                    if (this.y > circle1.y) {
                        this.velocity.y = 5;
                    } else {
                        this.velocity.y = -5;
                    }
                }


                if (getDistance(circle1.x, circle1.y, circle3.x, circle3.y) >= circle1.radius + circle3.radius + 5) {

                    if (rightPressed) {
                        if (circle1.x + circle1.radius < 0.5 * innerWidth - 5 && (circle3.x - circle3.radius - circle1.x + circle1.radius > 5 || circle3.x - circle3.radius - circle1.x + circle1.radius < 0)) {
                            circle1.update();
                            // circle1.x += 5;
                            circle1.velocity.x = 5;


                        } else if (circle3.x - circle3.radius - circle1.x + circle1.radius < 5) {
                            resolveCollisions(circle1, circle3);
                        }
                        // if (circle3.x - circle3.radius - circle1.x + circle1.radius > 5 && circle3.x > circle1.x) {
                        //     circle1.x += 5;

                        // }
                        // if (0.5 * innerWidth - circle1.x - circle1.radius < 5) {
                        //     circle1.x = 0.5 * innerWidth - circle1.radius;
                        //     circle1.velocity.x = 0.5 * innerWidth - circle1.x - circle1.radius;
                        //     circle1.update();
                        // } else {
                        //     circle1.velocity.x = 5;
                        //     circle1.update();

                        // }
                    }
                    if (leftPressed) {
                        if (circle1.x - circle1.radius > 5 && (circle1.x - circle1.radius + circle3.x - circle3.radius > 5 || circle1.x - circle1.radius + circle3.x - circle3.radius < 0)) {
                            circle1.update();
                            // circle1.x -= 5;
                            circle1.velocity.x = -5;


                        } else if (circle1.x - circle1.radius + circle3.x - circle3.radius < 5) {
                            resolveCollisions(circle1, circle3);
                        }
                        // if (circle1.x - circle1.radius - circle3.x + circle3.radius > 5 && circle3.x < circle1.x) {
                        //     circle1.x -= 5;
                        // }
                        // if (circle1.x - circle1.radius < 5) {
                        //     circle1.x = circle1.radius;
                        //     circle1.velocity.x = circle1.radius - circle1.x - 1;
                        //     circle1.update();
                        // } else {
                        //     circle1.velocity.x = -5;
                        //     circle1.update();
                        // }

                    }
                    if (downPressed) {
                        // if (circle1.y + circle1.radius < innerHeight - 5 && (circle3.y + circle3.radius - circle1.y + circle1.radius > 5 || circle3.y + circle3.radius - circle1.y + circle1.radius < 0)) {
                        if (circle1.y + circle1.radius < innerHeight - circle3.radius) {
                            circle1.update();
                            // circle1.y += 5;
                            circle1.velocity.y = 5;

                        } else if (circle3.y + circle3.radius - circle1.y + circle1.radius < 5) {
                            circle1.update();
                        }
                        // if (innerHeight - circle1.y - circle1.radius < 5) {
                        //     circle1.y = innerHeight - circle1.radius - 1;
                        //     circle1.velocity.y = innerHeight - circle1.y - circle1.radius - 1;
                        //     circle1.update();
                        // } else {
                        //     circle1.velocity.y = 5;
                        //     circle1.update();
                        // }


                    }
                    if (upPressed) {
                        // if (circle1.y - circle1.radius > 5 && (circle1.y + circle1.radius - circle3.y + circle3.radius > 5 || circle1.y + circle1.radius - circle3.y + circle3.radius < 0)) {

                        if (circle1.y - circle1.radius > circle3.radius * 2) {
                            circle1.update();
                            circle1.velocity.y = -5;
                            // circle1.y -= 5;


                        } else if (circle1.y + circle1.radius - circle3.y + circle3.radius < 5) {
                            circle1.update();
                        }
                        // if (circle1.y - circle1.radius < 5) {
                        //     circle1.y = circle1.radius + 1;
                        //     circle1.velocity.y = circle1.radius - circle1.y;
                        //     circle1.update();
                        // } else {
                        //     circle1.velocity.y = -5;
                        //     circle1.update();
                        // }

                    }
                    // if (upPressed && rightPressed) {
                    //     circle1.velocity.y = -0.5 * Math.sqrt(50);
                    //     circle1.velocity.x = -0.5 * Math.sqrt(50);
                    // } 
                    if (circle1.y - circle1.radius > circle3.radius) {
                        if (upPressed === true && rightPressed === true) {
                            circle1.update();
                            downPressed = false;
                            leftPressed = false;
                            circle1.y -= 2;
                            circle1.x += 2;
                        }
                    }
                    if (circle1.y - circle1.radius > circle3.radius) {
                        if (upPressed === true && leftPressed === true) {
                            downPressed = false;
                            rightPressed = false;
                            circle1.update();
                            circle1.y -= 2;
                            circle1.x -= 2;
                        }
                    }
                    if (circle1.y + circle1.radius < innerHeight - circle3.radius) {
                        if (downPressed === true && rightPressed === true) {
                            upPressed = false;
                            leftPressed = false;
                            circle1.update();
                            circle1.y += 2;
                            circle1.x += 2;
                        }
                    }
                    if (circle1.y + circle1.radius < innerHeight - circle3.radius) {
                        if (downPressed === true && leftPressed === true) {
                            upPressed = false;
                            rightPressed = false;
                            circle1.update();
                            circle1.y += 2;
                            circle1.x -= 2;
                        }
                    } else {
                        circle1.update();
                        circle1.velocity.x = 2;
                        circle1.velocity.y = 2;

                        // score();


                    }
                }



                // Player 2 control functions

                if (getDistance(circle2.x, circle2.y, circle3.x, circle3.y) >= circle2.radius + circle3.radius + 5) {
                    if (rightPressed2) {
                        if (circle2.x + circle2.radius < innerWidth + 10 && (circle3.x - circle3.radius - circle2.x + circle2.radius > 5 || circle3.x - circle3.radius - circle2.x + circle2.radius < 0)) {
                            circle2.velocity.x = 5;
                            circle2.update();
                        } else if (circle2.x - circle2.radius + circle3.x - circle3.radius < 5) {
                            resolveCollisions(circle2, circle3);
                        }
                    }
                    if (leftPressed2) {
                        if (circle2.x - circle2.radius > 0.5 * innerWidth + 5 && (circle2.x - circle2.radius - circle3.x + circle3.radius > 5 || circle2.x - circle2.radius - circle3.x + circle3.radius < 0)) {

                            circle2.velocity.x = -5;
                            circle2.update();

                        } else if (circle3.x - circle3.radius - circle2.x + circle2.radius < 5) {
                            resolveCollisions(circle2, circle3);
                        }
                    }
                    if (downPressed2) {

                        if (circle2.y + circle2.radius < innerHeight - circle3.radius) {
                            circle2.update();
                            // circle2.y += 5;
                            circle2.velocity.y = 5;

                        } else if (circle3.y + circle3.radius - circle2.y + circle2.radius < 5) {
                            circle2.update();
                        }


                    }
                    if (upPressed2) {

                        if (circle2.y - circle2.radius > circle3.radius * 2) {
                            circle2.update();
                            circle2.velocity.y = -5;
                            // circle2.y -= 5;


                        } else if (circle2.y + circle2.radius - circle3.y + circle3.radius < 5) {
                            circle2.update();
                        }

                    }

                    if (circle2.y - circle2.radius > circle3.radius) {
                        if (upPressed2 === true && rightPressed2 === true) {
                            circle2.update();
                            downPressed2 = false;
                            leftPressed2 = false;
                            circle2.y -= 2;
                            circle2.x -= 2;
                        }
                    }
                    if (circle2.y - circle2.radius > circle3.radius) {
                        if (upPressed2 === true && leftPressed2 === true) {
                            downPressed2 = false;
                            rightPressed2 = false;
                            circle2.update();
                            circle2.y -= 2;
                            circle2.x += 2;
                        }
                    }


                    if (circle2.y + circle2.radius < innerHeight - circle3.radius) {
                        if (downPressed2 === true && rightPressed2 === true) {
                            upPressed2 = false;
                            leftPressed2 = false;
                            circle2.update();
                            circle2.y += 2;
                            circle2.x -= 2;
                        }
                    }
                    if (circle2.y + circle2.radius < innerHeight - circle3.radius) {
                        if (downPressed2 === true && leftPressed2 === true) {
                            upPressed2 = false;
                            rightPressed2 = false;
                            circle2.update();
                            circle2.y += 2;
                            circle2.x += 2;
                        }
                    } else {
                        // circle2.velocity.x = 0;d
                        // circle2.velocity.y = 0;
                        circle2.update();

                    }
                }
                // if (getDistance(circle1.x, circle1.y, circle3.x, circle3.y) <= circle1.radius + circle3.radius) {
                //     nonElasticCollisions(circle1, circle3)
                // }

                // if (getDistance(circle2.x, circle2.y, circle3.x, circle3.y) <= circle2.radius + circle3.radius) {
                //     nonElasticCollisions(circle2, circle3)
                // }

                for (let i = 0; i < circles.length; i++) {
                    if (this === circles[i]) continue;
                    if (getDistance(this.x, this.y, circles[i].x, circles[i].y) <= this.radius + circles[i].radius) {

                        resolveCollisions(this, circles[i]);

                    }
                }

                // Win Condition
                if (player1Score === 1) {
                    for (let i = 0; i < circles.length; i++) {
                        circles[i].velocity.x = 0;
                        circles[i].velocity.y = 0;
                        e.globalCompositeOperation = 'source-over';
                        e.fillStyle = 'black';
                        e.font = "40px Arial bold";
                        e.fillText("Player 1 wins! Please press enter to return to the home page.", 0.5 * innerWidth - 450, 0.5 * innerHeight - 100);

                    }
                }
                if (player2Score === 1) {
                    for (let i = 0; i < circles.length; i++) {
                        circles[i].velocity.x = 0;
                        circles[i].velocity.y = 0;
                        e.globalCompositeOperation = 'source-over';
                        e.fillStyle = 'black';
                        e.font = "40px Arial bold";
                        e.fillText("Player 1 wins! Please press enter to return to the home page.", 0.5 * innerWidth - 450, 0.5 * innerHeight - 100);

                    }
                }
            }



            // player2
            d.globalCompositeOperation = 'source-over';
            d.fillStyle = 'blue';
            d.font = "50px Arial";
            d.fillText(`${player1Score} `, 0.5 * innerWidth -
                170, 50);
            // e.globalCompositeOperation = 'source-over';
            // e.fillStyle = 'red';
            // e.font = "30px Arial";
            // e.fillText(`${player1Score} - ${player2Score} `, 0.5 * innerWidth - 30, 50);
            f.globalCompositeOperation = 'source-over';
            f.fillStyle = 'red';
            f.font = "50px Arial";
            f.fillText(`${player2Score}`, 0.5 * innerWidth + 150, 50);







            this.velocity.x = this.velocity.x;
            this.velocity.y = this.velocity.y;
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

    function nonElasticCollisions(circle1, circle2) {
        const xVelocityDiff = circle1.velocity.x - circle2.velocity.x;
        const yVelocityDiff = circle1.velocity.y - circle2.velocity.y;

        const xDist = circle2.x - circle1.x;
        const yDist = circle2.y - circle1.y;

        circle2XDist1 = circle2.x - circle2.radius;
        circle2XDist2 = innerWidth - circle2.x + circle2.radius;
        circle2YDist1 = circle2.y - circle2.radius;
        circle2YDist2 = innerHeight - circle2.y + circle2.radius;



        // Prevent Circles from overlapping


        if (circle2XDist1 < circle2.velocity.x) {
            circle2.velocity.x = circle2XDist1;
        }
        if (circle2XDist2 < circle2.velocity.x) {
            circle2.velocity.x = circle2XDist2;
        }
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            circle2.velocity.x = -circle2.velocity.x * 1.05;
        }

    }

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

            // let absV = Math.abs(v1.x) + Math.abs(v2.x),
            //     overlap = (circle1.radius + circle2.radius) - Math.abs(circle1.x - circle2.x);

            // circle1.x += v1.x / absV * overlap;
            // circle2.x += v2.x / absV * overlap;
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
    const circle1 = new Circle(150, 0.5 * innerHeight, 2, 2, 100, 1000);
    const circle2 = new Circle(innerWidth - 150, 0.5 * innerHeight, -2, -2, 100, 1000);
    const circle3 = new Circle(0.5 * innerWidth, 0.5 * innerHeight, -5, 1, 50, 1);




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

    // Eventlistener to pause game


    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);



        circle1.drawCircle();
        circle2.drawCircle();
        circle3.drawCircle();

        drawRink();

        //Control Functionality. In this case it adds a velocity depending on which control is pressed. For player 1.



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




    drawRink();
    animate();


    function getDistance(x1, y1, x2, y2) {
        let xDist = x2 - x1;
        let yDist = y2 - y1;
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    }









}); //DOMContentLoaded End