//Assignment Expressions

var Temp = prompt("Enter tempature at which Originatl Gravity was taken");//user defined value for tempature of wort.
var OG = prompt("Enter Ogrinal Gravity");//User defined Orignal Gravity
var FG = prompt("Enter Final Gravity");//User defined Final Gravity

var total = (76.08 * (OG - FG) / (1.775 - OG )) * (FG / 0.794) / Temp;//math equaiption that will esitmate the ABV of a beer.
var result = "The estimated ABV of your berr is" + total + "% ABV";//defines the result of the equation
alert(result);//prompt shows the result of the equation which is an estimated ABV of a home brew beer