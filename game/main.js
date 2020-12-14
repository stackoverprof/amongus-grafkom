////////MEMBUAT OBJEK CANVAS
const Canvas = document.getElementById('canvas')    
const ctx = Canvas.getContext('2d')                 

let screenHeight = window.innerHeight              
let screenWidth = window.innerWidth

Canvas.width = screenWidth                          
Canvas.height = screenHeight


////////INSTANSIASI SETIAP OBJEK (Player, Figur2, Background2)
const Player = new PlayerCharacter()

const Figur = {
    Polisi : new CharacterPasif('gray', 'left', 1000, 0),
    Raja : new CharacterPasif('yellow', 'right', 3500, 1),
    Terong : new CharacterPasif('purple', 'left', 3500, 0.5)
}

const BackgroundObjects = {
    line: new Background.line(),
    iron: new Background.iron(),
    corridor: new Background.corridor(),
    labelNama: new Background.labelNama()
}


//SCREEN UPDATER
const Updater = () => {
    ctx.clearRect(0, 0, screenWidth, screenHeight)

    BackgroundObjects.corridor.Draw()
    BackgroundObjects.iron.Draw()
    BackgroundObjects.line.Draw()
    BackgroundObjects.labelNama.Draw()

    const figures = [Figur.Raja, Figur.Polisi, Figur.Terong, Player]

    figures.sort((a, b) => {return b.lane - a.lane})
    figures.forEach(figure => {
        figure.Draw()
    })
}
setInterval(Updater, 30)