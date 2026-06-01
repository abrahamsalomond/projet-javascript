//La condition if

if(2<8){
    alert("La condition est verifiée");
}


if(2>8){
    alert("La condition n'est pas verifié!");
}

//Utilisation de la fonction confirm()
if(confirm("Voulez-vous executer le code JavaScript de page?")){
    alert("Le code a bien été exécuté!");
}else{//utilisation de else
    alert("Desole, vous n'avez pas acces a ce site.");
}
//structure de else if
var floor=parseInt(prompt("Entrez l'etage ou l'ascensseur doit se rendre(de -2 a 30: "));
if(floor==0){
    alert("Vous vous trouvez deja au rez-de-chaussee.");
}else if(-2<=floor && floor <=30){
    alert("Direction de l'etage "+floor+"!");
}else{
    alert("L'etage specifie n'existe pas.");
}

//La condition switch

//Les ternaires
var startMessage = "Votre categorie d'age: ",
endMessage,
adult=confirm("Etes-vous majeur?");
endMessage=adult? '+18 ans' : '-18 ans';
alert(startMessage +''+ endMessage);