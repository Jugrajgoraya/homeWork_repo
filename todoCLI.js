// const fs = require('fs')

const readline = require('readline')

const optionList = '\n(v) View • ( n ) New • (cX) Complete • (dX) Delete • (q) Quit \n'
let list = [];
const done = '[✓]'
const due = '[]'

function view(){
    if(list.length == 0){
        console.log("List is empty..." + '\n');
        return optionList
    }else{
        let temp =''
        for(let i in list){
            temp += i +' '+ list[i] + '\n'
        }
        console.log(temp);
        return optionList;
    }
}
function add (item){
    list.push(`${due} ${item}`)
    return optionList
}
function remove(index){
    if(list[index].includes(`${due}`)){
        console.log(`deleted "${list[index].replace(`${due} `,'')}"`);
    }else if(list[index].includes(`${done}`)){
        console.log(`deleted "${list[index].replace(`${done} `,'')}"`);
    }
    list.splice(index,1)
    return optionList
}

function finish(i){
    list = list.map((item,index) =>{ 
        if(index == i){
            console.log(`completed "${item.replace(`${due} `,'')}"`);
            return item = item.replace(`${due}`,`${done}`)
        }else{
            return item
        }
    })
    return optionList
}
function quit(){
    return console.log('see you soon');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.output
})

rl.on(`line`,(answer)=>{
    if (answer == 'v'){
        console.log(view());
    }else if(answer == 'n'){
        rl.question('what ? ',(ans)=>{
            console.log(add(ans))
        })
    }else if( answer[0] == 'c'){
        console.log(finish(parseInt(answer[1])))
    }else if(answer[0] == 'd'){
        console.log(remove(parseInt(answer[1])));
    }else if( answer == 'q'){
        quit()
        rl.close()
    }else{
        rl.prompt()
    }
})