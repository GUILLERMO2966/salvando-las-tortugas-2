basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 26) {
        basic.showString("T.BAJA")
    } else if (input.temperature() > 34) {
        basic.showString("T.ALTA")
    } else {
        basic.showString("T.NORMAL")
    }
})
