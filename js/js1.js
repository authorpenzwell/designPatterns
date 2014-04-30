/**
 * @author K.O.F.I
 */
function say(speaker, message){
	this.text = speaker.name + ": " + message + "<br>";
	this.color = "black";
	document.write(text.fontcolor(this.color));
}
//Example 1 constructor and decorator
function Car( model, year, miles, condition ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.cond = condition;
 
  this.toString = function () {
    return this.model + " has " + this.miles + " miles on it. The car is " + this.cond;
  };
}
  
// new car
var civic = new Car( "Honda Accord", 2007, '145,000', 'used' );
var mondeo = new Car( "Nissan Altima", 2009, '125,000', 'used' );
 

var del = new function Dealer(){
	this.name = "Dealer".fontcolor("red");;
};

say(del, civic.toString().fontcolor("black"));
say(del, mondeo.toString().fontcolor("black"));
console.log( civic.toString() );
console.log( mondeo.toString() );