
/////////CONTROLLER - KEYBOARD EVENT HANDLER
let isRightPressed = false
let isLeftPressed = false
let isUpPressed = false
let isDownPressed = false

//ketika ditekan (press down) jalankan ini
const controlling = (e) => {
    if (e.which == 65 || e.which == 37){
        //GO LEFT 
        isLeftPressed = true
        Player.velocity.X = -5
    } else if (e.which == 68 || e.which == 39){
        //GO RIGHT
        isRightPressed = true
        Player.velocity.X = 5
    } else if (e.which == 38 || e.which == 87){
        //GO UP
        isUpPressed = true
        Player.velocity.Y = -5
    } else if (e.which == 40 || e.which == 83){
        //GO DOWN
        isDownPressed = true
        Player.velocity.Y = 5
    } 
}
    
//ketika jari diangkat jalankan ini
const uncontrolling = (e) => {
    if (e.which == 65 || e.which == 37){
        //UN-GO LEFT 
        isLeftPressed = false
        if (isRightPressed) Player.velocity.X = 5
        else Player.velocity.X = 0

    } else if (e.which == 68 || e.which == 39){
        //UN-GO RIGHT
        isRightPressed = false
        if (isLeftPressed) Player.velocity.X = -5
        else Player.velocity.X = 0     

    } else if (e.which == 38 || e.which == 87){
        //UN-GO UP
        isUpPressed = false
        if (isDownPressed) Player.velocity.Y = 5
        else Player.velocity.Y = 0

    } else if (e.which == 40 || e.which == 83){
        //UN-GO DOWN
        isDownPressed = false
        if (isUpPressed) Player.velocity.Y = -5
        else Player.velocity.Y = 0           
    }
}
//menambah event listener pada ketikan keyboard
document.addEventListener('keydown', controlling)
document.addEventListener('keyup', uncontrolling)
