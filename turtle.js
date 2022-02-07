class Turtle{
    constructor(x=0,y=0){
        this.path = [(x,y)]
        this.angle = 0;

    }
    forword(step){
        if ((this.angle = 0) || (this.angle = 360)){
            this.path.push((step,0))
        } else if ((this.angle = 90) || (this.angle = -270)) {
            this.path.push((0, step))
        } else if ((this.angle = 180) || (this.angle = -180)) {
            this.path.push((-step,0))
        } else if ((this.angle = -90) || (this.angle = 270)) {
            this.path.push((0,-step))
        }
    }
    

}

