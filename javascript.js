let input = document.createElement(`div`);
input.classList.add(`window`);

let eq = document.createElement(`div`);
eq.classList.add(`equation`)



let body = document.querySelector(`body`);
body.appendChild(eq)
body.appendChild(input)
let buttonLayout = document.createElement(`div`);
buttonLayout.classList.add(`buttonlayout`);
body.appendChild(buttonLayout);


let inputNum = [];
let outputNum = [];

let plus = document.createElement(`button`);
plus.classList.add(`plus`);
buttonLayout.appendChild(plus);
plus.innerHTML = `plus`;
plus.addEventListener(`click`, function(){
    if(outputNum.length === 0){
    outputNum.push(input.innerHTML)
    console.log(outputNum);
    eq.innerHTML = `${outputNum}`;
    input.innerHTML = `+`;
}
else{
    inputNum.push(input.innerHTML);
    console.log(`input num ` + inputNum);
    console.log(`output num ` + outputNum);
    console.log(`calculations needed`)
}
})

let result;

let equals = document.createElement(`button`);
equals.classList.add(`equals`);
equals.innerHTML = `=`;
buttonLayout.appendChild(equals);
equals.addEventListener(`click`, function(){
    console.log(inputNum)
})


let del = document.createElement(`button`);
del.classList.add(`delete`);
del.innerHTML = `delete`;
buttonLayout.appendChild(del)
del.addEventListener(`click`, function(){
    inputNum = [];
    input.innerHTML = ``;
    eq.innerHTML = ``;
})


for (let i = 0; i < 10; i++){
    let number = document.createElement(`button`)
    number.classList.add(`number${i}`)
    number.innerHTML = `${i}`;
    number.addEventListener(`click`, function(){
        input.innerHTML += `${i}`;
    })
    buttonLayout.appendChild(number);
}


