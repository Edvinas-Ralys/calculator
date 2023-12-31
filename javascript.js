
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

let calculator = document.querySelector(`.calculator`)
calculator.appendChild(output)
calculator.appendChild(input)
calculator.appendChild(buttonLayout)

input.innerHTML = `0`
let firstNum = [];
let secondNum = [];
let thirdNum = [];
let sum;

let operatorPart = document.createElement(`div`);
operatorPart.classList.add(`operatorPart`)
buttonLayout.appendChild(operatorPart)

let bottomPart = document.createElement(`div`)
bottomPart.classList.add(`bottomPart`)
buttonLayout.appendChild(bottomPart)

let numberPart = document.createElement(`div`)
numberPart.classList.add(`numberPart`)
bottomPart.appendChild(numberPart)

let rightPart = document.createElement(`div`)
rightPart.classList.add(`rightPart`)
bottomPart.appendChild(rightPart)

// check if user can type new line:
// 0 - can type
// 1 - reset inpput window and can type
let newLine = 1; 


//check if user can change operator in ouput window:
// 0 - can chage
// 1 - cannot change
let newSign = 1; 


function calculation(operator){
    if(secondNum.length === 0 || newSign === 4){
        secondNum = [];
        secondNum.push(Number(input.innerHTML))
        output.innerHTML = `${secondNum}` +` `+ `${operator}`;
        input.innerHTML = `${secondNum}`;
        newLine = 1;
        newSign = 3;
    }
    else if(output.innerHTML.includes(`+` || `-` || `*` || `/`) && newSign === 3){
        firstNum = [];
        firstNum.push(Number(input.innerHTML))
        if(output.innerHTML.includes(`+`)){
        sum = secondNum.map(function(num, idx){
            return num + firstNum[idx]
        })}
        else if(output.innerHTML.includes(`-`)){
        sum = secondNum.map(function(num, idx){
            return num - firstNum[idx]
        })}
        else if(output.innerHTML.includes(`*`)){
        sum = secondNum.map(function(num, idx){
            return num * firstNum[idx]
        })}
        else if(output.innerHTML.includes(`/`)){
        sum = secondNum.map(function(num, idx){
            return num / firstNum[idx]
        })}
        secondNum = [];
        firstNum = [];
        secondNum.push(Number(sum));
        firstNum.push(Number(sum));
        output.innerHTML = `${sum}`+ ` ` + `${operator}`
        input.innerHTML = `${sum}`
        newSign = 0
    }
    else if(newSign === 1){
        output.innerHTML = ``;
        output.innerHTML = `${sum}`+` `+`${operator}`
        newLine = 1;
        newSign = 2;
    }
    else if(newSign === 3 && !output.innerHTML.includes(`+` || `-` || `*` || `/`)){
        firstNum = [];
        console.log(secondNum)
        firstNum.push(Number(input.innerHTML))
        sum = secondNum.map(function(num, idx){
            return num - firstNum[idx]
        })
        secondNum = [];
        firstNum = [];
        secondNum.push(Number(sum));
        firstNum.push(Number(sum));
        output.innerHTML = `${Number(secondNum)}`+` `+ `${operator}`
        input.innerHTML = `${Number(firstNum)}`
        newLine = 1;
        newSign = 2;
    }
}


let plus = document.createElement(`button`);
plus.classList.add(`plus`);
operatorPart.appendChild(plus);
plus.innerHTML = `+`;
plus.addEventListener(`click`, function(){
    calculation(`+`)
})

let minus = document.createElement(`button`);
minus.classList.add(`minus`);
operatorPart.appendChild(minus);
minus.innerHTML = `-`;
minus.addEventListener(`click`, function(){
    calculation(`-`)
})

let multiplication = document.createElement(`button`);
multiplication.classList.add(`multiplication`);
operatorPart.appendChild(multiplication);
multiplication.innerHTML = `x`;
multiplication.addEventListener(`click`, function(){
    calculation(`*`)
})

let division = document.createElement(`button`);
division.classList.add(`division`);
operatorPart.appendChild(division);
division.innerHTML = `÷`
division.addEventListener(`click`, function(){
    calculation(`/`)
})

let point = document.createElement(`button`);
point.classList.add(`point`);
numberPart.appendChild(point);
point.innerHTML = `.`
point.addEventListener(`click`, function(){
    if(!input.innerHTML.includes(`.`)){
        input.innerHTML += `.`
    }
})

let backspaceArr = [];
let backspace = document.createElement(`button`)
backspace.classList.add(`backspace`)
rightPart.appendChild(backspace)
backspace.innerHTML = `⌫`;
backspace.addEventListener(`click`, function(){
    backspaceArr = String(input.innerHTML).split(``).map(Number)
    if(backspaceArr.length === 1 && backspaceArr[0] === 0){
        console.log(`only zero in input`)
    }
    else if(!output.innerHTML.includes(`=`)){
        backspaceArr.pop()
    }
    input.innerHTML = ``;
    input.innerHTML = `${backspaceArr.join(``)}`
    if(input.innerHTML === ``){
        input.innerHTML = `0`
    }
    if(output.innerHTML.includes(`=`)){
        output.innerHTML = ``
        firstNum = [];
        secondNum = [];
        thirdNum = [];
        input.innerHTML = `0`;
        output.innerHTML = ``
        newLine = 1;
        newSign = 1;
    }
})

// numbers - probably finished
for (let i = 0; i < 10; i++){
    let number = document.createElement(`button`)
    number.classList.add(`number${i}`)
    number.innerHTML = `${i}`;
    number.setAttribute(`style`, `order:-${i}`)
    number.addEventListener(`click`, function(){
        console.log(newLine)
        if(newLine === 1 && !input.innerHTML.includes(`.`)){
            input.innerHTML = ``
            newLine = 0;
            console.log(`1`)
        }
        if(newLine === 1 && output.innerHTML !== ``){
            input.innerHTML = ``
            newLine = 0;
            console.log(`1`)
        }
        if(newSign === 0){
            input.innerHTML = ``
            newSign = 3
            console.log(`3`)
        }
        if(input.innerHTML === `0` && input.innerHTML.includes(`.`)){
            input.innerHTML = ``
            console.log(`5`)
        }
        if(output.innerHTML.includes(`=`) && newLine === 0){
            secondNum = []; 
            firstNum = [];
            thirdNum = [];
            newLine = 1;
            output.innerHTML = ``;
            input.innerHTML = ``
        }
        input.innerHTML += `${i}`;
        console.log(`no ifs`)
    })
    numberPart.appendChild(number);
}


function isEqualFirstPress(operator){
    if(output.innerHTML.includes(`+`))
    {operator = `+`}
    else if(output.innerHTML.includes(`-`))
    {operator = `-`}
    else if(output.innerHTML.includes(`*`)){
        operator = `*`
    }
    else if(output.innerHTML.includes(`/`)){
        operator = `/`
    }
    if(secondNum.length === 0){
        console.log(`empty`)
    }
    firstNum = []
    firstNum.push(Number(input.innerHTML))
        if(operator === `+`){
        sum = secondNum.map(function(num, idx){
            return num + firstNum[idx]
        })}
        else if(operator === `-`){
            sum = secondNum.map(function(num, idx){
            return num - firstNum[idx]
        })}
        else if(operator === `*`){
            sum = secondNum.map(function(num, idx){
            return num * firstNum[idx]
        })}
        else if(operator === `/`){
            sum = secondNum.map(function(num, idx){
            return num / firstNum[idx]
        })}
    thirdNum = [];
    thirdNum.push(Number(input.innerHTML))
    newLine = 0;
    newSign = 4
    output.innerHTML = `${Number(secondNum)}`+` `+`${operator}`+` `+`${Number(thirdNum)}` +` `+ `=`;
    firstNum = [];
    sum = Math.round(sum*1000)/1000
    input.innerHTML = Number(sum);
    firstNum.push(Number(input.innerHTML))


}


function isEqualSecondPress(operator){
if(output.innerHTML.includes(`+`)){
    operator = `+`
}
else if(output.innerHTML.includes(`-`)){
    operator = `-`
}
else if(output.innerHTML.includes(`*`)){
    operator = `*`
}
else{operator = `/`}
secondNum = [];
secondNum.push(Number(input.innerHTML))
if(operator === `+`){
sum = secondNum.map(function(num, idx){
    return num + thirdNum[idx]
})}
else if(operator === `-`){
    sum = secondNum.map(function(num, idx){
        return num - thirdNum[idx]
    })}
else if(operator === `*`){
sum = secondNum.map(function(num, idx){
    return num * thirdNum[idx]
})}
else if(operator === `/`){
    sum = secondNum.map(function(num, idx){
        return num / thirdNum[idx]
    })}
output.innerHTML = `${Number(secondNum)}`+` `+`${operator}`+` `+`${Number(thirdNum)}` +` `+ `=`;
input.innerHTML = Number(sum);
newLine = 0;
newSign = 4
}


// equals button
let equals = document.createElement(`button`);
equals.classList.add(`equals`);
equals.innerHTML = `=`;
rightPart.appendChild(equals);
equals.addEventListener(`click`, function(){
    if(!output.innerHTML.includes(`=`) && ((output.innerHTML.includes(`+`)||
    output.innerHTML.includes(`-`)||output.innerHTML.includes(`*`)||
    output.innerHTML.includes(`/`)))&& secondNum.length !== 0){
    isEqualFirstPress()    
    }
    else if(output.innerHTML.includes(`=`)&& secondNum.length !== 0){
    isEqualSecondPress()
    }
    else if (secondNum.length === 0 ) {
    output.innerHTML = `${input.innerHTML}=`
}})
   

//delete button
let del = document.createElement(`button`);
del.classList.add(`delete`);
del.innerHTML = `C`;
rightPart.appendChild(del)
del.addEventListener(`click`, function(){
    firstNum = [];
    secondNum = [];
    thirdNum = [];
    input.innerHTML = `0`;
    output.innerHTML = ``
    newLine = 1;
    newSign = 1;
})
