const getFrameSet = (color) => {
    const frameset = []
    for (let i = 0; i < 26; i++) {
        frameset[i] = new Image()
        frameset[i].src = `img/frameset/${color}/${i}.png`
    }
    return frameset
}

function getImage(source) {
    const image = new Image()
    image.src = source
    return image
}

const ImageFrames = {
    yellow: getFrameSet('yellow'),
    brown: getFrameSet('brown'),
    gray: getFrameSet('gray'),
    purple: getFrameSet('purple')
}

const ImageBackground = {
    line: getImage('img/background/line.png'),
    iron: getImage('img/background/iron.png'),
    corridor: getImage('img/background/corridor.webp'),
    labelNama: getImage('img/nama.png')
}
