////////OBJECT PLAYER - YANG BISA DIKENDALIKAN DENGAN KEYBOARD
function PlayerCharacter() {
    this.width = 145
    this.height = 181
    this.velocity = {X: 0, Y: 0}
    this.frame = 0
    this.lane = 0
    this.image = ImageFrames.brown
    
    this.Position = {
        X : screenWidth/2-this.width/2,
        Y : screenHeight - 129 - this.height
    }

    this.Move = () => {
        //Handle perubahan posisi (gerak) //Melarang Player keluar dari sisi layar
        if (this.Position.X + this.velocity.X > 40 && this.Position.X + this.velocity.X < screenWidth - this.width - 40){    
            this.Position.X += this.velocity.X
        }
        if (this.Position.Y + this.velocity.Y > 411 - this.height && this.Position.Y + this.velocity.Y < screenHeight - 98 - 27 - this.height){    
            this.Position.Y += this.velocity.Y 
            this.lane = screenHeight - this.height - this.Position.Y - 129 - 8
        }
    }

    this.Framer = () => {
        let isMoving = this.velocity.X != 0 || this.velocity.Y != 0         //Logic penanyangan frame animasi disesuaikan pada this.velocity

        if (isMoving) {
            this.frame++
            console.log(this.frame)
            if (this.velocity.X < 0 &&                                      //ketika gerak ke kiri
                (this.frame < 1 || this.frame > 12)) 
                this.frame = 1
            else if (this.velocity.X > 0 &&                                 //ketika gerak ke kanan
                (this.frame < 13 || this.frame > 24)) 
                this.frame = 13
            else if ((this.velocity.Y != 0 && this.frame <= 13) &&           //ketika gerak atas/bawah dan sedang menghadap kiri
                (this.frame < 1 || this.frame > 12)) 
                this.frame = 1
            else if ((this.velocity.Y != 0 && this.frame > 13) &&          //ketika gerak atas/bawah dan sedang menghadap kanan
                (this.frame < 13 || this.frame > 24)) 
                this.frame = 13
        } else this.frame = this.frame < 13 ? 0 : 25                        //ketika diam
    }
    
    this.Draw = () => {
        //Method ini digunakan untuk merender di canvas
        this.Move()
        this.Framer()
        //Merender ke canvas menggunakan ctx 2D
        ctx.drawImage(this.image[this.frame], this.Position.X, this.Position.Y, this.width, this.height)
    }
}
