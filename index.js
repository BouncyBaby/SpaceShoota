
// import kaboom lib

import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";
kaboom({
    background:[0,0,0]
})

const SPEED = 320

loadSprite("Dino", "asset/dinowithhuman-removebg-preview.png")
// add the dino
const player = add([
    sprite("Dino"),
    area(),
    pos(width() / 2, height() - 64),
    anchor("center"),
])

// Movement
onKeyDown("left", () => {
    player.move(-SPEED, 0)
})
onKeyDown("right", () => {
    player.move(SPEED, 0)
})