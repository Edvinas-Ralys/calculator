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


let inputNum = [];
let outputNum = [];
let sum;


//plus button
//add button to html
let plus = document.createElement(`button`);
plus.classList.add(`plus`);
buttonLayout.appendChild(plus);
plus.innerHTML = `plus`;

plus.addEventListener(`click`, function(){
    if(outputNum.length === 0){
    outputNum.push(Number(input.innerHTML))
    output.innerHTML = `+`+`${outputNum}`;
}
else{
    inputNum.push(Number(input.innerHTML))
    sum = outputNum.map(function(num, idx){
        return num + inputNum[idx]
    })
    outputNum = [];
    output.innerHTML = `+${sum}`
    outputNum.push(Number(sum))
}
})


// numbers
for (let i = 0; i < 10; i++){
    let number = document.createElement(`button`)
    number.classList.add(`number${i}`)
    number.innerHTML = `${i}`;
    number.addEventListener(`click`, function(){
        input.innerHTML += `${i}`;
    })
    buttonLayout.appendChild(number);
}







// equals button
let equals = document.createElement(`button`);
equals.classList.add(`equals`);
equals.innerHTML = `=`;
buttonLayout.appendChild(equals);
equals.addEventListener(`click`, function(){
    console.log(inputNum)
})


//delete button
let del = document.createElement(`button`);
del.classList.add(`delete`);
del.innerHTML = `delete`;
buttonLayout.appendChild(del)
del.addEventListener(`click`, function(){
    inputNum = [];
    input.innerHTML = ``;
    output.innerHTML = ``;
})
