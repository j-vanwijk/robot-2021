let sensorRechts = 0
let sensorLinks = 0
basic.forever(function () {
    let verschilSenoren = 0
    sensorRechts = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
    sensorLinks = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
    sensorLinks = sensorLinks - sensorRechts
    if (verschilSenoren > 10) {
        if (sensorLinks > sensorRechts) {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 30)
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        } else {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 30)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # . #
                . . . # .
                . . # . .
                `)
        }
    } else {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
    }
})
