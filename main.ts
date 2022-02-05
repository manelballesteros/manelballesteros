let temperatura = 0
let bruixola = 0
radio.onReceivedString(function (receivedString) {
    serial.writeValue("Graus", temperatura)
    basic.showString("" + (temperatura))
    basic.pause(1000)
    serial.writeValue("bruixola", bruixola)
    basic.showString("" + (bruixola))
    basic.pause(1000)
})
basic.forever(function () {
    radio.setGroup(1)
    bruixola = bruixola
    temperatura = temperatura
})
basic.forever(function () {
    basic.showString("" + (temperatura))
    radio.sendValue("temperatura", temperatura)
    basic.showString("" + (bruixola))
    radio.sendValue("bruixola", bruixola)
    basic.pause(2000)
})
