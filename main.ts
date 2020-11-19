input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let oszlopok = 0; oszlopok <= 4; oszlopok++) {
        for (let sorok = 0; sorok <= 4; sorok++) {
            led.plot(oszlopok, sorok)
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    for (let oszlopok = 0; oszlopok <= 4; oszlopok++) {
        for (let sorok = 0; sorok <= 4; sorok++) {
            led.plot(randint(0, 4), randint(0, 4))
            basic.pause(100)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let oszlopok = 0; oszlopok <= 4; oszlopok++) {
        for (let sorok = 0; sorok <= 4; sorok++) {
            if (oszlopok == sorok) {
                led.plot(oszlopok, sorok)
                led.plot(oszlopok, 4 - sorok)
                basic.pause(100)
            }
        }
    }
})
basic.forever(function () {
	
})
