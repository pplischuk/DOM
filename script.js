"use strict";

//1. створити список з допомогою роботи з домом, пронумерувати список та вивести всі його значення. Населення відобразити в млн "40 млн". Київ та Україна підсвітити синьо-жовтим кольором.
let CountryList = [

	{country: "Україна", capital:"Київ", count: 40000000},
	{country: "Грузія", capital:"Тбілісі", count: 10000000},
	{country: "Великобританія", capital:"Лондон", count: 100000000},
	{country: "США", capital:"Вашингтон", count: 300000000}];


let countries = document.getElementById('countryList')

for(let i = 0; i < CountryList.length; i++){
	CountryList[i].count = `${CountryList[i].count/1000000} млн`
	let ulli = document.createElement('li')
	let ul = document.createElement('ul')
	if(CountryList[i].country === 'Україна'){
		let ua = document.createElement('li')
		ua.innerText = CountryList[i].country
		ua.style.color = 'yellow'
		ul.appendChild(ua)
	}
	if(CountryList[i].capital === 'Київ'){
		let ua = document.createElement('li')
		ua.innerText = CountryList[i].capital
		ua.style.color = 'blue'
		ul.appendChild(ua)
	}
	countries.appendChild(ulli)
	ulli.appendChild(ul)
	for(let key in CountryList[i]){
		let li = document.createElement('li')
		li.innerText = CountryList[i][key]
		ul.appendChild(li)
	}
}

//2. Створити список в якому можна буде довільно змінювати колір для айтемів (палітра мінімум з 5 кольорів).

let list = ['car','plane','boat','bycicle','bus','snowboard']
let ul = document.getElementById('list')
ul.style.display = 'inline-block'
document.body.appendChild(ul)
for(let i = 0; i< list.length; i++){
	let li = document.createElement('li')
	li.style.color = 'white'
	li.innerText = list[i]
	ul.appendChild(li)
}

function makered(){
	ul.style.background = 'red'
}

function makeblack(){
	ul.style.background = 'black'
}

function makeyellow(){
	ul.style.background = 'yellow'
}

function makegreen(){
	ul.style.background = 'green'
}

function makeblue(){
	ul.style.background = 'blue'
}