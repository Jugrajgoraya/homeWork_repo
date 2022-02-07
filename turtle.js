class Turtle{
    constructor(x=0,y=0){
        this.path = [[x,y]]
        this.angle = 0;

    }
    forward(step){
        let arr = this.path[this.path.length-1]
        if ((this.angle == 0) || (this.angle == 360)){
            this.path.push([arr[0]+step,arr[1]])
        } else if ((this.angle == 90) || (this.angle == -270)) {
            this.path.push([arr[0], arr[1]+step])
        } else if ((this.angle == 180) || (this.angle == -180)) {
            this.path.push([arr[0]-step,arr[1]])
        } else if ((this.angle == -90) || (this.angle == 270)) {
            this.path.push([arr[0],arr[1]-step])
        }
        return this
    }
    right(){
        this.angle  -= 90;
        return this
    }
    
    left(){
        this.angle +=90;
        return this
    }

    allPoints(){
        this.path.forEach(element =>{
        console.log(element)
        })
    }

}

const t1 = new Turtle();
t1.forward(3).right().forward(4).allPoints()
const flash = new Turtle(0, 0).forward(3).left().forward(3).left().forward(10);
flash.allPoints()