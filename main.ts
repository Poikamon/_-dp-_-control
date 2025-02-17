radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        ENA = 50
        IN1 = 1
        IN2 = 0
        ENB = 0
        IN3 = 0
        IN4 = 0
    }
    if (receivedNumber == 1) {
        ENA = 0
        IN1 = 0
        IN2 = 0
        ENB = 50
        IN3 = 1
        IN4 = 0
    }
    if (receivedNumber == 2) {
        ENA = 50
        IN1 = 1
        IN2 = 0
        ENB = 50
        IN3 = 1
        IN4 = 0
    }
    if (receivedNumber == 3) {
        ENA = 0
        IN1 = 0
        IN2 = 0
        ENB = 0
        IN3 = 0
        IN4 = 0
    }
})
let IN4 = 0
let IN3 = 0
let ENB = 0
let IN2 = 0
let IN1 = 0
let ENA = 0
radio.setGroup(2)
ENA = AnalogPin.P8
IN1 = AnalogPin.P1
IN2 = AnalogPin.P2
ENB = AnalogPin.P9
IN3 = AnalogPin.P13
IN4 = AnalogPin.P14
basic.forever(function () {
	
})
