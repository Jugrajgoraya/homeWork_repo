// ┏  ━   ┣   ┓  ┗  ┛  ┫  ┃

function drawLine (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    return lines;
}

console.log(drawLine(4))

function drawTopborder (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    lines = "┏" + lines +"┓"
    return lines;
}

console.log(drawTopborder(4))


function drawMiddleBorder (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    lines ="┣" + lines + "┫"
    return lines;
}

console.log(drawMiddleBorder(4))