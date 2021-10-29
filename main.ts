let current__temperature = 0
basic.forever(function () {
    current__temperature = input.temperature()
    basic.showNumber(current__temperature)
    basic.pause(1000)
    basic.clearScreen()
})
