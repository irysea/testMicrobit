basic.forever(function () {
    basic.pause(1000)
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showString("" + (images.arrowImage(ArrowNames.North)))
    }
    basic.pause(1000)
    basic.clearScreen()
})
