let mit_val = 0
let bits_val = 0
input.onButtonPressed(Button.A, function () {
    mit_val = 1
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # # .
        # # # # .
        . # # . .
        `)
    basic.pause(2000)
    bits_val = randint(1, 3)
    if (bits_val == 1) {
        basic.showIcon(IconNames.Meh)
    } else if (bits_val == 2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
input.onButtonPressed(Button.AB, function () {
    mit_val = 3
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        # # # # .
        `)
    basic.pause(2000)
    bits_val = randint(1, 3)
    if (bits_val == 3) {
        basic.showIcon(IconNames.Meh)
    } else if (bits_val == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
input.onButtonPressed(Button.B, function () {
    mit_val = 2
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    basic.pause(2000)
    bits_val = randint(1, 3)
    if (bits_val == 2) {
        basic.showIcon(IconNames.Meh)
    } else if (bits_val == 3) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
