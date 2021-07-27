basic.forever(function () {
    basic.pause(1000)
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
