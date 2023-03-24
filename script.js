function calculateRobotMoving() {

    const sizex = Number(document.getElementById('sizex').value)
    const sizey = Number(document.getElementById('sizey').value)
    const commands = document.getElementById('commands').value
    const result = document.getElementById('result')

    //Define the robot as an object
    const robot = {
        positionX: 1,
        positionY: 1,
        facing: 'N'
    }

    //Looping based on the string commands
    for (let i = 0; i < commands.length; i++) {

        if (commands[i] === 'R') {
            
            if (robot.facing === 'N') {
                robot.facing = 'E'
            } else if (robot.facing === 'E') {
                robot.facing = 'S'
            } else if (robot.facing === 'S') {
                robot.facing = 'W'
            } else if (robot.facing === 'W') {
                robot.facing = 'N'
            }

        } else if (commands[i] === 'L') {

            if (robot.facing === 'N') {
                robot.facing = 'W'
            } else if (robot.facing === 'W') {
                robot.facing = 'S'
            } else if (robot.facing === 'S') {
                robot.facing = 'E'
            } else if (robot.facing === 'E') {
                robot.facing = 'N'
            }

        } else if (commands[i] === 'F') {

            if (robot.facing === 'N') {

                if (robot.positionY < sizey) {
                    robot.positionY++
                }

            } else if (robot.facing === 'E') {

                if (robot.positionX < sizex) {
                    robot.positionX++
                }

            } else if (robot.facing === 'S') {

                if (robot.positionY > 1) {
                    robot.positionY--
                }

            } else { //the robot is facing W

                if (robot.positionX > 1) {
                    robot.positionX--
                }

            }

        }
        
    }

    //Make the string to be print
    if (robot.facing === 'N') {
        robot.facing = 'North'
    } else if (robot.facing === 'E') {
        robot.facing = 'East'
    } else if (robot.facing === 'S') {
        robot.facing = 'South'
    } else {
        robot.facing = 'West'
    }

    //Print the result
    result.innerHTML = `${robot.positionX}, ${robot.positionY}, ${robot.facing}`
}

//Add the event to the button
document.getElementById('button').addEventListener('click', calculateRobotMoving)