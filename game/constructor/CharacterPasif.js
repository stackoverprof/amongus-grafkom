////////OBJECT NON-PLAYER - FIGUR BERGERAK YANG LEWAT
function CharacterPasif(color, starting, delay = 0, lane) {
    this.width = 145
    this.height = 181
    this.velocity = starting == 'left' ? 5 : -5
    this.frame = 0
    this.turningArea = Math.random() * screenWidth + screenWidth + this.width*2
    this.lane = lane * (screenHeight-411-98-27)

    //switch sesuai warna karakter yg diminta (untuk memilih mengambil frame set animasi yang mana)
    switch (color) {
        case 'gray':
            this.image = ImageFrames.gray
            break
        case 'yellow':
            this.image = ImageFrames.yellow
            break            
        case 'brown':
            this.image = ImageFrames.brown
            break            
        case 'purple':
            this.image = ImageFrames.purple
            break            
        default:
            this.image = ImageFrames.brown
            break
    }
    
    this.Position = {
        X : starting == 'left' ?  -this.width : screenWidth,
        Y : screenHeight - this.height - this.lane - 129
    }

    this.Move = () => {
        //bagian pergerakan
        this.Position.X += this.velocity - Player.velocity.X*2         
        this.Position.Y = screenHeight - this.height - this.lane - 129
    }
    
    //men-delay kemunculan
    this.isDelayed = true
    setTimeout(() => {
        this.isDelayed = false
    }, delay)

    this.Framer = () => {                                           //Logic penanyangan frame animasi disesuaikan pada this.velocity
        if (this.velocity < 0 && 
            (this.frame < 1 || this.frame > 12))                    //Gerak ke kiri
            this.frame = 1
        else if (this.velocity > 0 &&                             //Gerak ke kanan
            (this.frame < 13 || this.frame > 24)) 
            this.frame = 13
    }

    //method ini digunakan untuk merender di canvas
    this.Draw = () => {
        if (!this.isDelayed){
            //bagian ini supaya figur bolak balik ke kanan dan kiri (tidak hilang begitu saja)
            if (this.Position.X + this.velocity < screenWidth/2-this.turningArea/2){    
                this.velocity = 5
                this.lane = Math.random() * (screenHeight-411-98-27)
            } else if (this.Position.X + this.velocity > screenWidth/2 + this.turningArea/2){
                this.velocity = -5
                this.lane = Math.random() * (screenHeight-411-98-27)
            }

            //memberi kemungkinan kecil untuk berbalik arah
            if(Math.random() < 0.0025) this.velocity = -this.velocity  
                
            this.Move()
            this.Framer()
            //merender ke canvas menggunakan ctx 2D
            ctx.drawImage(this.image[this.frame++], this.Position.X, this.Position.Y, this.width, this.height)
        }
    }
}