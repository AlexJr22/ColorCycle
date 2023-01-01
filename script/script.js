// pegar os valores dos inputs

let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color5 = document.getElementById('color5');

// criar uma função para setar o valor dos inputs com com o os da animação

function setColor() {
    document.documentElement.style.setProperty('--color1', color1.value);
    document.documentElement.style.setProperty('--color2', color2.value);
    document.documentElement.style.setProperty('--color3', color3.value);
    document.documentElement.style.setProperty('--color4', color4.value);
    document.documentElement.style.setProperty('--color5', color5.value);
};

