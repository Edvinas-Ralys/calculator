let input = document.querySelector(`.window`);
let body = document.querySelector(`body`);
body.appendChild(input)
let buttonLayout = document.createElement(`div`);
buttonLayout.classList.add(`buttonlayout`);
body.appendChild(buttonLayout);

let calculation = [];

let enter = document.createElement(`button`);
enter.classList.add(`enter`);
buttonLayout.appendChild(enter);
enter.innerHTML = `enter`;
enter.addEventListener(`click`, function(){
    console.log(calculation)
})

let del = document.createElement(`button`);
del.classList.add(`delete`);
del.innerHTML = `delete`;
buttonLayout.appendChild(del)
enter.addEventListener(`click`, function(){
    input.innerHTML = ``;
    calculation = [];
})


for (let i = 0; i < 10; i++){
    let number = document.createElement(`button`)
    number.classList.add(`number${i}`)
    number.innerHTML = `${i}`;
    number.addEventListener(`click`, function(){
        input.innerHTML += `${i}`;
        calculation.push(i)
    })
    buttonLayout.appendChild(number);
}


