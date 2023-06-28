scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(myAnim, tiles.getTileLocation(57, 1))
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . 1 1 e 1 1 . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, myAnim, 0, 100)
})
let projectile: Sprite = null
let myAnim: Sprite = null
myAnim = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(myAnim, 100, 100)
scene.cameraFollowSprite(myAnim)
animation.runImageAnimation(
myAnim,
assets.animation`myAnim`,
200,
true
)
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
    music.play(music.stringPlayable("C C C F F A A A ", 99), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C C F F A A A ", 99), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C C C F F F D C ", 99), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("D D C C C F F A ", 99), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B C5 A F A B G F ", 99), music.PlaybackMode.UntilDone)
})
