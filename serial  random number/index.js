let btn1 = document.querySelector(".generate");
let sel = document.querySelector(".serial");

btn1.onclick = function (){
    let charachters = '1234567890abcdefghigkmlnopqrstuvwxyzABCDEFGHIJKLMNOPQSTRUVWXYU!@#$%&';
    let count = 12;
    let randomS = '';
    for (let i = 0; i <count; i++){
        randomS += charachters [Math.floor(Math.random() * charachters.length)];
       
    }
    sel.innerHTML = randomS;
};