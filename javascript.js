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


let test = document.createElement(`button`)
test.classList.add(`test`)
test.innerHTML = `test`
buttonLayout.appendChild(test)
test.addEventListener(`click`, function(){
    operation(`+`)
})


// check if user can type new line:
// 0 - can type
// 1 - reset inpput window and can type



let newLine = 0; 
let newSign = 1;  



//check if user can change operator in ouput window:
// 0 - can chage
// 1 - cannot change


function calculation(operator){
    if(secondNum.length === 0 || newSign === 4){
        secondNum = [];
        secondNum.push(Number(input.innerHTML))
        output.innerHTML = `${secondNum}` + `${operator}`;
        input.innerHTML = `${secondNum}`;
        newLine = 1;
        newSign = 3;
    }
    else if(output.innerHTML.includes(`${operator}`) && newSign === 3){
        firstNum = [];
        firstNum.push(Number(input.innerHTML))
        if(operator === `+`){
        sum = secondNum.map(function(num, idx){
            return num + firstNum[idx]
        })}
        else if(operator === `-`){
        sum = secondNum.map(function(num, idx){
            return num - firstNum[idx]
        })}
        // else if(operator === `*`){
        // sum = secondNum.map(function(num, idx){
        //     return num * firstNum[idx]
        // })   
        // }
        secondNum = [];
        firstNum = [];
        secondNum.push(Number(sum));
        firstNum.push(Number(sum));
        output.innerHTML = `${sum}`+`${operator}`
        input.innerHTML = `${sum}`
        newSign = 0
    }
    else if(newSign === 1){
        output.innerHTML = ``;
        output.innerHTML = `${sum}`+`${operator}`
        newLine = 1;
        newSign = 2;
    }
    else if(newSign === 3 && !output.innerHTML.includes(`+`)){
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
        output.innerHTML = `${Number(secondNum)}+`
        input.innerHTML = `${Number(firstNum)}`
    }
}


let plus = document.createElement(`button`);
plus.classList.add(`plus`);
buttonLayout.appendChild(plus);
plus.innerHTML = `+`;
plus.addEventListener(`click`, function(){
    calculation(`+`)
})

let minus = document.createElement(`button`);
minus.classList.add(`minus`);
buttonLayout.appendChild(minus);
minus.innerHTML = `-`;
minus.addEventListener(`click`, function(){
    calculation(`-`)
})


let multiplication = document.createElement(`button`);
multiplication.classList.add(`multiplication`);
buttonLayout.appendChild(multiplication);
multiplication.innerHTML = `*`;
multiplication.addEventListener(`click`, function(){
    calculation(`*`)
})

// numbers - probably finished
for (let i = 0; i < 10; i++){
    let number = document.createElement(`button`)
    number.classList.add(`number${i}`)
    number.innerHTML = `${i}`;
    number.addEventListener(`click`, function(){
        if(newLine === 1){
            input.innerHTML = ``
            newLine = 0;
            console.log(`pressed 1st if`)
        }
        if(newSign === 0){
            input.innerHTML = ``
            newSign = 3
            console.log(`pressed 2nd if`)
        }
        if(input.innerHTML === `0`){
            input.innerHTML = ``
            console.log(`pressed 3nd if`)
        }
        if(output.innerHTML.includes(`=`) && newLine === 0){
            secondNum = []; 
            firstNum = [];
            thirdNum = [];
            newLine = 1;
            output.innerHTML = ``;
            input.innerHTML = ``
            console.log(`pressed 4th if`)
        }
        input.innerHTML += `${i}`;
    })
    buttonLayout.appendChild(number);
}


function isEqualFirstPress(operator){
    if(output.innerHTML.includes(`+`) && !output.innerHTML.includes(`=`)){
        operator = `+`
    }
    else if(output.innerHTML.includes(`-`) && !output.innerHTML.includes(`=`)){
        operator = `-`
    }
    // if(output.innerHTML.includes(`*`) && !output.innerHTML.includes(`=`)){
    //     operator = `*`
    // }
    // if(output.innerHTML.includes(`/`) && !output.innerHTML.includes(`=`)){
    //     operator = `/`
    // }
    firstNum = []
    firstNum.push(Number(input.innerHTML))
        if(operator === `+`){
        sum = secondNum.map(function(num, idx){
            return num + firstNum[idx]
        })}
        console.log(operator)
        if(operator === `-`){
            sum = secondNum.map(function(num, idx){
            return num - firstNum[idx]
        })}
        console.log(operator)
        // if(operator = `*`){
        //     sum = secondNum.map(function(num, idx){
        //     return num * firstNum[idx]
        // })}
        // if(operator = `/`){
        //     sum = secondNum.map(function(num, idx){
        //     return num / firstNum[idx]
        // })}
    console.log(operator)
    thirdNum = [];
    thirdNum.push(Number(input.innerHTML))
    console.log(thirdNum)
    newLine = 0;
    newSign = 4
    output.innerHTML = `${Number(secondNum)}`+`${operator}`+`${Number(thirdNum)}` + `=`;
    firstNum = [];
    input.innerHTML = Number(sum);
    firstNum.push(Number(input.innerHTML))
    console.log(newLine)
}



// equals button - probably finished
let equals = document.createElement(`button`);
equals.classList.add(`equals`);
equals.innerHTML = `=`;
buttonLayout.appendChild(equals);
equals.addEventListener(`click`, function(){
    isEqualFirstPress()    



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
    newLine = 1;
    newSign = 1;
})









//transfer everything to a single function
// function operation(operator){
//     if(secondNum.length === 0){
//         secondNum.push(Number(input.innerHTML))
//         output.innerHTML = `${secondNum}` + `${operator}`;
//         input.innerHTML = `${secondNum}`;
//         newLine = 2;
//         console.log(secondNum)
//         console.log(`test wotking`)
//     }
//     else if (!output.innerHTML.includes(`${operator}`) && newLine !== 3){
//         firstNum = [];
//         console.log(secondNum)
//         firstNum.push(Number(input.innerHTML))
//         sum = secondNum.map(function(num, idx){
//             return num - firstNum[idx]
//         })
//         console.log(sum)
//         secondNum = [];
//         firstNum = [];
//         secondNum.push(Number(sum));
//         firstNum.push(Number(sum));
//         output.innerHTML = `${Number(secondNum)} + ${operator}`
//         input.innerHTML = `${Number(firstNum)}`
//         newLine = 3;
//         newSign = 0; 
//     }
//     else if(newSign === 1 && output.innerHTML.includes(`${operator}`)){
//         firstNum = [];
//         firstNum.push(Number(input.innerHTML))
//         sum = secondNum.map(function(num, idx){
//             return num + firstNum[idx]
//         })
//         secondNum = [];
//         firstNum = [];
//         secondNum.push(Number(sum));
//         firstNum.push(Number(sum));
//         console.log(secondNum);
//         console.log(firstNum)
//         output.innerHTML = `${sum} + ${operator}`
//         input.innerHTML = `${sum}`
//         newLine = 0;
//         newSign = 0;
//     }
//     if(newLine === 3){
//         console.log(`works`)
//         output.innerHTML = ``;
//         output.innerHTML = `${operator}+`
//     }
// };


////// plus button function/////////// 10-23
// if calculator is empty
// if(secondNum.length === 0){
//     secondNum.push(Number(input.innerHTML))
//     output.innerHTML = `${secondNum}` + `+`;
//     input.innerHTML = `${secondNum}`;
//     newLine = 1;
//     newSign = 3;
//     console.log(`if calc is empty`)
//     console.log(newSign)
// }
// // if a number is in input window, plus is pressed again
// else if(output.innerHTML.includes(`+`) && newSign === 3){
//     firstNum = [];
//     firstNum.push(Number(input.innerHTML))
//     sum = secondNum.map(function(num, idx){
//         return num + firstNum[idx]
//     })
//     secondNum = [];
//     firstNum = [];
//     secondNum.push(Number(sum));
//     firstNum.push(Number(sum));
//     console.log(secondNum);
//     console.log(firstNum)
//     output.innerHTML = `${sum}+`
//     input.innerHTML = `${sum}`
//     newSign = 0
//     console.log(`second plus press`)
// }
// //disables calculation after second plus press. Calculates if new number is in input
// else if(newSign === 1){
//     console.log(firstNum)
//     console.log(secondNum)
//     output.innerHTML = ``;
//     output.innerHTML = `${sum}+`
//     newLine = 1;
//     newSign = 2;
//     console.log(`third plus press`)
// }

// else if(newSign === 3 && !output.innerHTML.includes(`+`)){
//     console.log(`click`)
//     firstNum = [];
//     console.log(secondNum)
//     firstNum.push(Number(input.innerHTML))
//     sum = secondNum.map(function(num, idx){
//         return num - firstNum[idx]
//     })
//     console.log(sum)
//     secondNum = [];
//     firstNum = [];
//     secondNum.push(Number(sum));
//     firstNum.push(Number(sum));
//     output.innerHTML = `${Number(secondNum)}+`
//     input.innerHTML = `${Number(firstNum)}`
// }






/////////////// minus function/////// 10-23
// minus.addEventListener(`click`, function(){
//     // if calculator is empty
//         if(secondNum.length === 0 || newSign === 4){
//         secondNum = [];
//         secondNum.push(Number(input.innerHTML))
//         output.innerHTML = `${secondNum}` + `-`;
//         input.innerHTML = `${secondNum}`;
//         newLine = 1;
//         newSign = 3;
//     }
//     // if a number is in input window, minus is pressed again
// else if(output.innerHTML.includes(`-`) && newSign === 3){
//         firstNum = [];
//         firstNum.push(Number(input.innerHTML))
//         sum = secondNum.map(function(num, idx){
//             return num - firstNum[idx]
//         })
//         secondNum = [];
//         firstNum = [];
//         secondNum.push(Number(sum));
//         firstNum.push(Number(sum));
//         console.log(secondNum);
//         console.log(firstNum)
//         output.innerHTML = `${sum}-`
//         input.innerHTML = `${sum}`
//         console.log(`after second plus press`)
//         newSign = 0
//     }
//     //disables calculation after second minus press. Calculates if new number is in input
// else if(newSign === 1){
//         console.log(firstNum)
//         console.log(secondNum)
//         output.innerHTML = ``;
//         output.innerHTML = `${sum}-`
//         newLine = 1;
//         newSign = 2;
//     }
// else if(newSign === 3 && !output.innerHTML.includes(`-`)){
//         console.log(`click`)
//         firstNum = [];
//         console.log(secondNum)
//         firstNum.push(Number(input.innerHTML))
//         sum = secondNum.map(function(num, idx){
//             return num + firstNum[idx]
//         })
//         console.log(sum)
//         secondNum = [];
//         firstNum = [];
//         secondNum.push(Number(sum));
//         firstNum.push(Number(sum));
//         output.innerHTML = `${Number(secondNum)}-`
//         input.innerHTML = `${Number(firstNum)}`
//     }})





    // // first `=` press
    // if(output.innerHTML.includes(`+`) && !output.innerHTML.includes(`=`)){
    //     firstNum = []
    //     firstNum.push(Number(input.innerHTML))
    //     sum = secondNum.map(function(num, idx){
    //         return num + firstNum[idx]
    //     })
    //     thirdNum = [];
    //     thirdNum.push(Number(input.innerHTML))
    //     console.log(thirdNum)
    //     newLine = 0;
    //     newSign = 4
    //     output.innerHTML = `${Number(secondNum)}`+`+`+`${Number(thirdNum)}` + `=`;
    //     firstNum = [];
    //     input.innerHTML = Number(sum);
    //     firstNum.push(Number(input.innerHTML))
    //     console.log(newLine)
    //     }
    // else if(output.innerHTML.includes(`-`) && !output.innerHTML.includes(`=`)){
    //     firstNum = []
    //     firstNum.push(Number(input.innerHTML))
    //     sum = secondNum.map(function(num, idx){
    //         return num - firstNum[idx]
    //     })
    //     thirdNum = [];
    //     thirdNum.push(Number(input.innerHTML))
    //     console.log(thirdNum)
    //     newLine = 0;
    //     newSign = 4
    //     output.innerHTML = `${Number(secondNum)}`+`-`+`${Number(thirdNum)}` + `=`;
    //     firstNum = [];
    //     input.innerHTML = Number(sum);
    //     firstNum.push(Number(input.innerHTML))
    //     }

// second and following `=` presses
//     if(output.innerHTML.includes(`=`) && output.innerHTML.includes(`+`)){
//         secondNum = [];
//         secondNum.push(Number(input.innerHTML))
//         sum = secondNum.map(function(num, idx){
//             return num + thirdNum[idx]
//         })
//         output.innerHTML = `${Number(secondNum)}`+`+`+`${Number(thirdNum)}` + `=`;
//         input.innerHTML = Number(sum);
//         newLine = 0;
//         newSign = 4
//         console.log(newLine)
//     }
//     else if(output.innerHTML.includes(`=`) && output.innerHTML.includes(`-`)){
//         secondNum = [];
//         secondNum.push(Number(input.innerHTML))
//         sum = secondNum.map(function(num, idx){
//             return num - thirdNum[idx]
//         })
//         newLine = 0;
//         newSign = 4
//         output.innerHTML = `${Number(secondNum)}`+`-`+`${Number(thirdNum)}` + `=`;
//         input.innerHTML = Number(sum);
//         console.log(newLine)
//     }