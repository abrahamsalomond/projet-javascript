//Declaration de variables
//NB: il existe 3 types de variables; numeriques, booleans et textes

var numberr=2;
alert(typeof(numberr)); //typeof permet de connaitre le type d'une variables


var boolien = false;
alert(typeof(boolien));

//La concatenation
var hi="Bonjour ";
var mon="Monsieur";
hi+=mon;
alert(hi);

//Interagir avec l'utilisateur
//La fonction prompt
var username=prompt("Entrez votre nom: ");
alert(username);

//Convertir une chaine de caractere en un nombre
//parseInt()
var text="1234", number;
number=parseInt(text);
alert(typeof number);

//convertir un nombre en chaine
var text, number1=4, number2=2;
text = number1+''+number2;
alert(text); //Affiche : <<42>>
