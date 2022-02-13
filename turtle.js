class Turtle{
    constructor(x,y){
        this.limit = [x,y]
        this.path = [[5,5]]
        this.angle = 0;

    }
    forward(step){
        for(let i = 1; i<= step; i++){
            const arr = this.path[this.path.length-1]
            if (this.angle == 0){
                if((arr[0]+1) < this.limit[0]){
                    this.path.push([arr[0]+1,arr[1]])
                }
            } else if ((this.angle == 90) || (this.angle == -270)) {
                if((arr[1]-1) >= 0){
                    this.path.push([arr[0], arr[1]-1])
                }
            } else if ((this.angle == 180) || (this.angle == -180)) {
                if((arr[0]-1) >= 0){
                    this.path.push([arr[0]-1,arr[1]])
                }
            } else if ((this.angle == -90) || (this.angle == 270)) {
                if(arr[1]+1 < this.limit[1]){
                    this.path.push([arr[0],Math.abs(arr[1]+1)])
                }
            }
        }
        return this
    }
    // i'm using regular math coordinates to change the angles
    right(){
        this.angle -=90;
        if(this.angle == 360 || this.angle == -360){
            this.angle = 0
        }
        return this
    }
    
    left(){
        this.angle +=90;
        if(this.angle == 360){
            this.angle = 0
        }
        return this
    }

    allPoints(){
        this.path.forEach(element =>{
            console.log(element)
        })
    }
    print(){
        const turleMoves = (x, y) => {
            for (let step of this.path) {
                if (step[0] === x && step[1] === y)
                return true;
            }
            return false;
        };
        let patt =""
        for(let Y=-1; Y<=this.limit[1]; Y++ ){
            let row = ''
            for(let X=0; X<=this.limit[0]; X++){
                if(turleMoves(X,Y)){
                    row +='*'
                }else{
                    row +='-'
                }
            }
            patt +=row +'\n'
        }
        console.log(patt);
    }
}

const flash = new Turtle(15, 15).forward(5).left().forward(6).right().forward(3).right().forward(10).left().forward(3).left().forward(5)
flash.allPoints()
flash.print()

