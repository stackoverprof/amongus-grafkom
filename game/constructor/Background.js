////////BACKGROUND INTERAKTIF - bg terdiri dari tiga bagian: line, iron dan corridor
const Background = {
    line: function () {
        this.width = 181
        this.height = 27
        this.image = ImageBackground.line

        this.Position = {
            X: 0,
            Y: screenHeight - 98 - this.height
        }

        this.Draw = () => {
            this.Position.X -= Player.velocity.X*3
            this.Position.Y = screenHeight - 91 - this.height

            //let do while dibawah berfungsi untuk infinity loop ke kanan dan ke kiri sesuai dengan pergeseran screen
            //ini untuk generate loop ke kanan
            
            let i = 0
            do ctx.drawImage(this.image, this.Position.X + this.width*i, this.Position.Y, this.width, this.height)
            while (i++*this.width + this.Position.X < screenWidth ) 

            //sedangkan ini untuk generate loop ke kiri
            let j = 0
            while (this.Position.X - this.width*j > 0) {
                ctx.drawImage(this.image, this.Position.X - this.width*++j, this.Position.Y, this.width, this.height)
            }
        }
    },
    iron: function () {
        this.width = 1689
        this.height = 98
        this.image = ImageBackground.iron

        this.Position = {
            X: 0,
            Y: screenHeight - this.height
        }

        this.Draw = () => {
            this.Position.X -= Player.velocity.X
            this.Position.Y = screenHeight - this.height

            //let do while dibawah berfungsi untuk infinity loop ke kanan dan ke kiri sesuai dengan pergeseran screen
            //ini untuk generate loop ke kanan

            let i = 0
            do ctx.drawImage(this.image, this.Position.X + this.width*i, this.Position.Y, this.width, this.height)
            while (i++*this.width + this.Position.X < screenWidth ) 
            
            //sedangkan ini untuk generate loop ke kiri
            let j = 0
            while (this.Position.X - this.width*j > 0) {
                ctx.drawImage(this.image, this.Position.X - this.width*++j, this.Position.Y, this.width, this.height)
            }
        }
    },
    corridor: function () {
        this.width = 1692.26
        this.height = 468
        this.image = ImageBackground.corridor

        this.Position = {
            X: 0,
            Y: 0
        }

        this.Draw = () => {
            this.Position.X -= Player.velocity.X*2

            //let do while dibawah berfungsi untuk infinity loop ke kanan dan ke kiri sesuai dengan pergeseran screen
            //ini untuk generate loop ke kanan


            let i = 0
            do ctx.drawImage(this.image, this.Position.X + this.width*i, this.Position.Y, this.width, this.height)
            while (i++*this.width + this.Position.X < screenWidth ) 
            
            //sedangkan ini untuk generate loop ke kiri
            let j = 0
            while (this.Position.X - this.width*j > 0) {
                ctx.drawImage(this.image, this.Position.X - this.width*++j, this.Position.Y, this.width, this.height)
            }
        }
    },
    labelNama: function () {
        this.width = 375
        this.height = 120
        this.image = ImageBackground.labelNama

        this.Position = {
            X: 892,
            Y: 60
        }

        this.Draw = () => {
            this.Position.X -= Player.velocity.X*2.5

            ctx.drawImage(this.image, this.Position.X, this.Position.Y, this.width, this.height)
        }
    },
}
