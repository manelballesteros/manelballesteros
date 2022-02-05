let bruixola = 0
let temperatura = 0
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
