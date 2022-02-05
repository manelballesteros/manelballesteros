basic.forever(function () {
    serial.redirectToUSB()
    serial.writeValue("Graus", input.temperature())
    serial.writeValue("llum", input.lightLevel())
})
basic.forever(function () {
    basic.showString("" + (input.temperature()))
    basic.pause(1000)
    basic.showString("" + (input.lightLevel()))
    basic.pause(1000)
})
