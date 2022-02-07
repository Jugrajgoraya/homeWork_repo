// ┏  ━   ┣   ┓  ┗  ┛  ┫  ┃

function drawLine (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    return lines;
}

function drawTopborder (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    lines = "┏" + lines +"┓"
    return lines;
}


function drawMiddleBorder (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    lines ="┣" + lines + "┫"
    return lines;
}

function drawBottomBorder (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    lines ="┗" + lines + "┛"
    return lines;
}


function drawBarsArround (str){
    return "┃" + str + "┃";
}


function boxIt(arr =[]) {
    let answer = ""
    let maxLength = 0
    if(arr.length == 0){
        answer = "┏"+"┓"+"\n" + "┗" + "┛"
    }
    for(let a of arr ){
        if(a.length > maxLength){
            maxLength = a.length
        }
    }

    for(let a in arr){

        if(a == 0  && arr.length !=1){ // 
            answer = answer +
            drawTopborder(maxLength)+"\n"+
            drawBarsArround(arr[a]) + "\n" +
            drawMiddleBorder(maxLength) + "\n"
        }else if(a != arr.length-1){
            answer = answer +
            drawBarsArround(arr[a]) + "\n" +
            drawMiddleBorder(maxLength) + "\n" 
        }else if(arr.length == 1){
            answer = answer +
            drawTopborder(maxLength)+"\n"+ 
            drawBarsArround(arr[a]) + "\n" +
            drawBottomBorder(maxLength)
        }else if( a == arr.length -1){
            answer = answer +
            drawBarsArround(arr[a]) + "\n" + 
            drawBottomBorder(maxLength)
        }
    }
      return answer
}

console.log(boxIt(["kon hai","my name is rohit","tu kon hai"]));
console.log(boxIt(['a']));
console.log(boxIt());



// forword(step){
//     if ((this.angle = 0) || (this.angle = 360)){
//         this.path.push([step,0])
//     } else if ((this.angle = 90) || (this.angle = -270)) {
//         this.path.push([0, step])
//     } else if ((this.angle = 180) || (this.angle = -180)) {
//         this.path.push([-step,0])
//     } else if ((this.angle = -90) || (this.angle = 270)) {
//         this.path.push([0,-step])
//     }
// }
// right(){
//     this.angle -=90;
// }
// left(){
//     this.angle +=90;
// }
// allPoints(){
//     let str=""
//     for(let i=0; i < this.path.length; i++){
//         let temp =""
//         for(let j = 0; j< this.path[i].length; j++){
//             console.log(this.path[i][j])
//             temp += ' '
//         }
//         str += temp+ '\n'
        
//     }

// }