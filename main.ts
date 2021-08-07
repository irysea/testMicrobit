input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showLeds(`
        # # # # .
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        . . # # .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . # # # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    시간구간 = input.runningTime() + 5000
    basic.showString("" + (input.temperature()))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    시간구간 = input.runningTime() + 5000
    basic.showNumber(input.lightLevel())
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # .
        . # # # .
        . # # . .
        `)
})
let 시간구간 = 0
let initFlag = 0
시간구간 = 0
let count001 = input.rotation(Rotation.Pitch)
input.calibrateCompass()
basic.forever(function () {
    if (input.runningTime() >= 시간구간) {
        시간구간 = input.runningTime() + 0
        if (count001 % 4 == 0) {
            basic.showNumber(input.temperature())
        }
        if (count001 % 4 == 1) {
            basic.showNumber(input.lightLevel())
        }
        if (count001 % 4 == 2) {
            basic.showNumber(input.compassHeading())
        }
        if (count001 % 4 == 3) {
            basic.showNumber(input.rotation(Rotation.Pitch))
        }
        count001 += 1
        시간구간 = input.runningTime() + 10000
    }
})
