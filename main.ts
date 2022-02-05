let bruixola = 0
let temperatura = 0
radio.onReceivedString(function (receivedString) {
    bruixola = bruixola
    basic.showString("" + (bruixola))
    basic.pause(1000)
    temperatura = temperatura
    basic.showString("" + (temperatura))
    basic.pause(1000)
})
basic.forever(function () {
    radio.setGroup(1)
})
