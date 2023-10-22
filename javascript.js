let input = document.createElement(`div`);
input.classList.add(`window`);

let output = document.createElement(`div`);
output.classList.add(`equation`)



let body = document.querySelector(`body`);
body.appendChild(output)
body.appendChild(input)
let buttonLayout = document.createElement(`div`);
buttonLayout.classList.add(`buttonlayout`);
body.appendChild(buttonLayout);

input.innerHTML = `0`
let inputNum = [];
let outputNum = [];
let sum;
let newLine = 2;


//plus button
let plus = document.createElement(`button`);
plus.classList.add(`plus`);
buttonLayout.appendChild(plus);
plus.innerHTML = `+`;

plus.addEventListener(`click`, function(){
    if(outputNum.length === 0){
    outputNum.push(Number(input.innerHTML))
    output.innerHTML = `${outputNum}` + `+`;
    input.innerHTML = `${outputNum}`;
    newLine = 0;
}
else{
    inputNum.push(Number(input.innerHTML))
    sum = outputNum.map(function(num, idx){
        return num + inputNum[idx]
    })
    outputNum = [];
    inputNum = [];
    output.innerHTML = `${sum}+`
    input.innerHTML = `${sum}`
    newLine = 0;
    if(!output.innerHTML.includes(`+`)){
        output.innerHTML = `${outputNum}` + `+`;}
}
})

//minus button
let minus = document.createElement(`button`);
minus.classList.add(`minus`);
buttonLayout.appendChild(minus);
minus.innerHTML = `-`;

minus.addEventListener(`click`, function(){
    if(outputNum.length === 0){
    outputNum.push(Number(input.innerHTML))
    output.innerHTML = `${outputNum}` + `-`;
    input.innerHTML = `${outputNum}`;
    newLine = 0;
}
else{
    inputNum.push(Number(input.innerHTML))
    sum = outputNum.map(function(num, idx){
        return num - inputNum[idx]
    })
    outputNum = [];
    input.innerHTML = `${inputNum}`;
    inputNum = [];
    output.innerHTML = `${sum}-`
    outputNum.push(Number(sum));
    newLine = 0;
    if(!output.innerHTML.includes(`-`)){
        output.innerHTML = `${outputNum}` + `-`;}
}
})

//multiplication button
let timesX = document.createElement(`button`);
timesX.classList.add(`times`);
buttonLayout.appendChild(timesX);
timesX.innerHTML = `x`;
timesX.addEventListener(`click`, function(){
    if(outputNum.length === 0){
    outputNum.push(Number(input.innerHTML))
    output.innerHTML = `${outputNum}` + `x`;
    input.innerHTML = `${outputNum}`;
    newLine = 0;
}
else if(!output.innerHTML.includes(`x`)){
    output.innerHTML = `${outputNum}` + `x`;
}
else{
    inputNum.push(Number(input.innerHTML))
    sum = outputNum.map(function(num, idx){
        return num * inputNum[idx]
    })
    outputNum = [];
    input.innerHTML = `${inputNum}`;
    inputNum = [];
    output.innerHTML = `${sum}x`
    outputNum.push(Number(sum));
    newLine = 0;
}
})


// numbers
for (let i = 0; i < 10; i++){
    let number = document.createElement(`button`)
    number.classList.add(`number${i}`)
    number.innerHTML = `${i}`;
    number.addEventListener(`click`, function(){
        if(newLine === 0 || newLine === 2){
            input.innerHTML = ``;
            newLine = 1;
        }
        input.innerHTML += `${i}`;
        if(output.innerHTML.includes(`=`)){
            outputNum = []; 
            inputNum = [];
            output.innerHTML = ``;
        }
    })
    buttonLayout.appendChild(number);
}


// equals button
let equals = document.createElement(`button`);
equals.classList.add(`equals`);
equals.innerHTML = `=`;
buttonLayout.appendChild(equals);
equals.addEventListener(`click`, function(){
    if(output.innerHTML.includes(`=`)){
        output.innerHTML = ``;
    }
    if(output.innerHTML.includes(`+`)){
        inputNum.push(Number(input.innerHTML))
        sum = outputNum.map(function(num, idx){
            return num + inputNum[idx]
        })
    newLine = 0;
    output.innerHTML = `${Number(inputNum)}`+`+`+`${Number(outputNum)}` + `=`;
    // outputNum = [];
    inputNum = [];
    input.innerHTML = Number(sum);
    inputNum.push(Number(input.innerHTML))
    console.log(inputNum);
    console.log(outputNum)
    }
})









//delete button
let del = document.createElement(`button`);
del.classList.add(`delete`);
del.innerHTML = `delete`;
buttonLayout.appendChild(del)
del.addEventListener(`click`, function(){
    inputNum = [];
    outputNum = [];
    input.innerHTML = `0`;
    output.innerHTML = ``
    newLine = 0;
})
