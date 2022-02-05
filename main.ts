let bruixola = 0
let temperatura = 0
radio.onReceivedNumber(function (receivedNumber) {
	
})
radio.onReceivedValue(function (name, value) {
    bruixola = bruixola
    temperatura = temperatura
})
basic.forever(function () {
    radio.setGroup(1)
})
