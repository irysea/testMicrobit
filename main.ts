basic.showString("Hello!")
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    basic.showString("x" + input.magneticForce(Dimension.X))
    basic.pause(500)
    basic.showString("y" + input.magneticForce(Dimension.Y))
    basic.pause(500)
    basic.showString("z" + input.magneticForce(Dimension.Z))
})
