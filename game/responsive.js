//MENHANDLE PERUBAHAN UKURAN SCREEN
const reportWindowSize = () => {
    screenWidth = window.innerWidth
    screenHeight = window.innerHeight
    Canvas.width = screenWidth
    Canvas.height = screenHeight
    
    console.log(Player.Position.Y)
    console.log(screenHeight - Player.height - 129)
    if(Player.Position.Y > screenHeight - Player.height - 129 || Player.Position.Y < 411 - Player.height) {
        Player.Position.Y = screenHeight - Player.height - 129
    }
}
window.addEventListener('resize', reportWindowSize)