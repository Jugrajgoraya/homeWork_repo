// ┏  ━   ┣   ┓  ┗  ┛  ┫  ┃

function drawLine (num){
    let lines = ""
    for(let i =0; i<num; i++){
        lines += "━";
    }
    return lines;
}

console.log(drawLine(4))