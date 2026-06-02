//LES FONCTIONS
//exemple 1
function show_msg(){
    alert("Ma toute premiere fonction en js.");
}
show_msg();

//exemple 2
function fibonacci(n){
    if(n==0 || n==1){ return 1;
        }else{return fibonacci(n-2)+fibonacci(n-1);}
}

alert(fibonacci(10));

//les fonctions anonymes

(function(){
    alert("Fonction anonymes");
})();