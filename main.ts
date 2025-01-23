let lowerBound = 1
let upperBound = 99
let guess = 0
let attempts = 0

basic.showString("Mysli na cislo")

while (true) {
    guess = Math.floor((lowerBound + upperBound) / 2)
    attempts += 1
    whaleysans.showNumber(guess)
    basic.pause(500)

    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            // Číslo je menší
            upperBound = guess - 1
            break
        }
        if (input.buttonIsPressed(Button.B)) {
            // Číslo je větší
            lowerBound = guess + 1
            break
        }
        if (input.logoIsPressed()) {
            // Konec hry, zobrazení pokusů
            basic.showString("Attempts:")
            whaleysans.showNumber(attempts)
            basic.pause(5000) // Počkej 5 sekund
            control.reset() // Restartuj Micro:bit
        }
    }
}
