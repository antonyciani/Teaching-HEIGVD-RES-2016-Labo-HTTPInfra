// Author : Ciani Antony

var Chance = require('chance');
var express = require('express');
var app = express();
var chance = new Chance();

app.get('/', function (req, res) {
  res.send(generatePizzas());
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function generatePizzas() {

	var sizes = ["small", "standard", "large"];
	var typesOfDough = ["normal", "whole wheat flour", "no gluten"];
	var typesOfCheese = ["mozzarella", "mozzarella di buffala"];
	var typesOfToppings = ["ham", "prosciutto", "pepperoni", "tuna", "mushrooms", "anchovies", "artichoke", "pineapple", "peppers", "bacon", "rucola", "raclette cheese", "gorgonzola", "chicken", "sundried baby tomatoes", "jalapeno peppers", "beef", "olives"]; 
	

	var nbPizzas = chance.integer({
	
		min: 0,
		max: 10
	});
	
	var nbToppings = chance.integer({
	
		min: 0,
		max: 5
	});
	
	console.log(nbPizzas);
	
	var pizzas = [];
	
	for( var i = 0; i < nbPizzas; i++) {
	
		var typeOfDough = chance.pick(typesOfDough);
		var typeOfCheese = chance.pick(typesOfCheese);		
		var nbToppings = chance.integer({
			min: 0,
			max: 5
		});
		
		var toppings = [];
		
		for( var j = 0; j < nbToppings; j++){
		
			toppings.push(chance.pick(typesOfToppings));
			
		}
		
		pizzas.push({
			typeOfDough: typeOfDough,
			typeOfCheese: typeOfCheese,
			toppings: toppings
		});
		
		
	}

	console.log(pizzas);
	return pizzas;



}