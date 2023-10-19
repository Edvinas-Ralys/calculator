let buttonGrid = document.querySelector(`.buttons`)
for(let i = 1; i < 17; i++){
    let button = document.createElement(`div`);
    button.classList.add(`button${i}`);
    buttonGrid.appendChild(button);
}