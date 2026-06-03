//LES OBJETS ET LES TABLEAUX
//Les methodes pour creer un tableau
var tab =['Abrahm', 'Salomon', 'DOPAVOGUI'];
var tab2= new Array("France", "Clermont-Ferrand");

alert(tab);
alert(tab2);

//Operations sur les tableaux
var myArray=['Sebastien', 'Laurence'];
myArray.push('Ludovic'); //ajoute Ludovic
myArray.push('Pauline', 'Guillaune'); //ajoute Pauline et Guillaune a la fin du tableau
alert(myArray);
myArray.shift(); //retire Sebastien au debut du tableau
myArray.pop(); //retire Guillaume a la fin
alert('convertir une chaine en tableau; split()');
var cousinString='Pauline Guillaume Clarisse';
cousinsArray=cousinString.split(' ');
alert(cousinsArray);

var cousinString2 = cousinsArray.join(' ');
alert('Convertir un tableau en une chaine de caractere; join()');
alert(cousinString2);