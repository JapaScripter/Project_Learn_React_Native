/*=====API'S=====*/
/*API React Dom*/					import ReactDOM from 'react-dom/client'
/*API React*/							import React from 'react';
/*=====API'S=====*/
/*=====Import=====*/
/*App*/										import App from './App'
/*CSS*/										import './index.css'
/*=====Import=====*/
/*=====Main=====*/
const root = document.querySelector('#root')
ReactDOM.createRoot(root).render(<App />)
/*=====Main=====*/

// let nome = 'Yuri';
// alert(nome);

let nota1 = 10, nota2 = 8, nota3 = 9, nota4 = 5;
alert("A nota 1 foi: "nota1);
alert("A nota 2 foi: "nota2);
alert("A nota 3 foi: "nota3);
alert("A nota 4 foi: "nota4);

let media = nota1 + nota2 + nota3 + nota4;

if (media >=7 && media <= 10) {
	console.log("Aprovado com nota: " media);
}
else if (media <= 7 && media >= 0) {
	console.log("Reprovado com nota: " media);
}
else {
	console.log("Valor precisa ser entre 0 e 10");
}