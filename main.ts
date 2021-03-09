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
        resultat_jag = 1 + resultat_jag
    } else {
        basic.showIcon(IconNames.Skull)
        resultat_bot = 1 + resultat_bot
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (resultat_jag))
    basic.showString("-")
    basic.showString("" + (resultat_bot))
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
        resultat_jag = 1 + resultat_jag
    } else {
        basic.showIcon(IconNames.Skull)
        resultat_bot = 1 + resultat_bot
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
        resultat_jag = 1 + resultat_jag
    } else {
        basic.showIcon(IconNames.Skull)
        resultat_bot = 1 + resultat_bot
    }
})
let bits_val = 0
let mit_val = 0
let resultat_bot = 0
let resultat_jag = 0
resultat_jag = 0
resultat_bot = 0
basic.forever(function () {
    if (resultat_jag == 3) {
        music.playMelody("C D E F G A B C5 ", 277)
        basic.showString("Du vann!")
        resultat_bot = 0
        resultat_jag = 0
    }
    if (resultat_bot == 3) {
        music.playMelody("C5 B A G F E D C ", 274)
        basic.showString("Du förlora!")
        resultat_bot = 0
        resultat_jag = 0
    }
})
