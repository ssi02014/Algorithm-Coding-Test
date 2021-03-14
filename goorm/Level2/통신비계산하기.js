const readline = require("readline"); 
const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
}); 

const input = [];

rl.on("line", function (line) {
  input.push(line); 
}).on("close", function () { 
  const [currentRatePlan, usage] = input[0].split(" ").map(Number);
	const ratePlan = {
		'29900': 300,
		'34900': 1000,
		'39900': 2000,
		'49900': 6000,
		'59900': 11000,
		'69900': 0,
	}
	let [recommendRatePlan, monthlyFee, recommendFee] = [0, 0, 239900];
	let temp = 0;
	let charge = 0;
	
	for (let i = 0; i < Object.keys(ratePlan).length + 1; i++) {
		if (i === 5) temp = 0;
		else {
			if (usage > Object.values(ratePlan)[i]) {
				temp = usage - Object.values(ratePlan)[i];
			} else temp = 0;
			
			if (temp * 20 > 25000 && temp < 5000) temp = 25000;
			else if (temp * 20 > 180000) temp = 180000;
			else temp *= 20;
		}
		
		if (Object.keys(ratePlan)[i] == currentRatePlan) {
			monthlyFee = parseInt(Object.keys(ratePlan)[i]) + temp;
		}
		
		charge = parseInt(Object.keys(ratePlan)[i]) + temp;
		
		if (charge < recommendFee) {
			recommendFee = charge;
			recommendRatePlan = Object.keys(ratePlan)[i];
		}
	}
	
	console.log(recommendRatePlan, monthlyFee, recommendFee);
});
