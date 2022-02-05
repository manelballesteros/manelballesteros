let bruixola = 0
basic.forever(function () {
    let temperatura = 0
    radio.setGroup(1)
    bruixola = input.compassHeading()
    bruixola = input.temperature()
    radio.sendString("" + (bruixola))
    basic.showString("" + (bruixola))
    radio.sendString("" + (temperatura))
    basic.showString("" + (temperatura))
})
