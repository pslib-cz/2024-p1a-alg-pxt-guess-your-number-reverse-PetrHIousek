let MinimalNumber = 1
let MaximalNumber = 99
let guess = 0
let attempts = 0

basic.showString("Mysli na cislo")

while (true) {
    guess = Math.floor((MinimalNumber + MaximalNumber) / 2)
    attempts += 1
    whaleysans.showNumber(guess)
    basic.pause(500)

    while (true) {
        if (input.buttonIsPressed(Button.A)) {
            // Číslo je menší
            MaximalNumber = guess - 1
            break
        }
        if (input.buttonIsPressed(Button.B)) {
            // Číslo je větší
            MinimalNumber = guess + 1
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
