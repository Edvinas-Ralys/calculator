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
let firstNum = [];
let secondNum = [];
let thirdNum = [];
let sum;
let newLine = 2;
let newPlus = 1;


//plus button
let plus = document.createElement(`button`);
plus.classList.add(`plus`);
buttonLayout.appendChild(plus);
plus.innerHTML = `+`;

plus.addEventListener(`click`, function(){
    if(secondNum.length === 0){
    secondNum.push(Number(input.innerHTML))
    output.innerHTML = `${secondNum}` + `+`;
    input.innerHTML = `${secondNum}`;
    newLine = 0;
}
else if(newPlus === 1){
    firstNum = [];
    firstNum.push(Number(input.innerHTML))
    sum = secondNum.map(function(num, idx){
        return num + firstNum[idx]
    })
    secondNum = [];
    firstNum = [];
    secondNum.push(Number(sum));
    firstNum.push(Number(sum));
    console.log(secondNum);
    console.log(firstNum)
    output.innerHTML = `${sum}+`
    input.innerHTML = `${sum}`
    newLine = 0;
    newPlus = 0;
    if(!output.innerHTML.includes(`+`)){
        output.innerHTML = `${secondNum}` + `+`;}
    
}
})

//minus button
let minus = document.createElement(`button`);
minus.classList.add(`minus`);
buttonLayout.appendChild(minus);
minus.innerHTML = `-`;

minus.addEventListener(`click`, function(){
    if(secondNum.length === 0){
    secondNum.push(Number(input.innerHTML))
    output.innerHTML = `${secondNum}` + `-`;
    input.innerHTML = `${secondNum}`;
    newLine = 0;
}
else{
    firstNum.push(Number(input.innerHTML))
    sum = secondNum.map(function(num, idx){
        return num - firstNum[idx]
    })
    secondNum = [];
    thirdNum.push(Number(input.innerHTML))
    input.innerHTML = `${firstNum}`;
    firstNum = [];
    output.innerHTML = `${sum}-`
    secondNum.push(Number(sum));
    newLine = 0;
    if(!output.innerHTML.includes(`-`)){
        output.innerHTML = `${secondNum}` + `-`;}
}
})

//multiplication button
let timesX = document.createElement(`button`);
timesX.classList.add(`times`);
buttonLayout.appendChild(timesX);
timesX.innerHTML = `x`;
timesX.addEventListener(`click`, function(){
    if(secondNum.length === 0){
    secondNum.push(Number(input.innerHTML))
    output.innerHTML = `${secondNum}` + `x`;
    input.innerHTML = `${secondNum}`;
    newLine = 0;
}
else if(!output.innerHTML.includes(`x`)){
    output.innerHTML = `${secondNum}` + `x`;
}
else{
    firstNum.push(Number(input.innerHTML))
    sum = secondNum.map(function(num, idx){
        return num * firstNum[idx]
    })
    secondNum = [];
    input.innerHTML = `${firstNum}`;
    firstNum = [];
    output.innerHTML = `${sum}x`
    secondNum.push(Number(sum));
    newLine = 0;
}
})















// numbers - probably finished
for (let i = 0; i < 10; i++){
    let number = document.createElement(`button`)
    number.classList.add(`number${i}`)
    number.innerHTML = `${i}`;
    number.addEventListener(`click`, function(){
        if(newLine === 0 || newLine === 2){
            input.innerHTML = ``;
            newLine = 1;
        }
        if(input.innerHTML === `0`){
            input.innerHTML = ``
        }
        input.innerHTML += `${i}`;
        if(output.innerHTML.includes(`=`)){
            secondNum = []; 
            firstNum = [];
            thirdNum = [];
            newPlus = 1;
            output.innerHTML = ``;
        }
    })
    buttonLayout.appendChild(number);
}

// equals button - probably finished
let equals = document.createElement(`button`);
equals.classList.add(`equals`);
equals.innerHTML = `=`;
buttonLayout.appendChild(equals);
equals.addEventListener(`click`, function(){
    if(output.innerHTML.includes(`=`)){
        secondNum = [];
        secondNum.push(Number(input.innerHTML))
        sum = secondNum.map(function(num, idx){
            return num + thirdNum[idx]
        })
        newLine = 0;
        output.innerHTML = `${Number(secondNum)}`+`+`+`${Number(thirdNum)}` + `=`;
        input.innerHTML = Number(sum);
    }
    if(output.innerHTML.includes(`+`) && !output.innerHTML.includes(`=`)){
        firstNum.push(Number(input.innerHTML))
        sum = secondNum.map(function(num, idx){
            return num + firstNum[idx]
        })
        thirdNum.push(Number(input.innerHTML))
        console.log(thirdNum)
        newLine = 0;
        output.innerHTML = `${Number(secondNum)}`+`+`+`${Number(thirdNum)}` + `=`;
        firstNum = [];
        input.innerHTML = Number(sum);
        firstNum.push(Number(input.innerHTML))
        }
    }
)

//delete button - probably finished
let del = document.createElement(`button`);
del.classList.add(`delete`);
del.innerHTML = `delete`;
buttonLayout.appendChild(del)
del.addEventListener(`click`, function(){
    firstNum = [];
    secondNum = [];
    thirdNum = [];
    input.innerHTML = `0`;
    output.innerHTML = ``
    newLine = 0;
    newPlus = 1;
})
