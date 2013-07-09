//Demanem per consola la llista
var llista = prompt("Llista");
var cont = 0;

var array1 = llista.split(" ");
//Xuleta per veure conte l'array1 
//console.log(array1);
var array2 = [];

for (var i=0; i<array1.length; i++){
    if (array1[i] !== ""){
        //Afegim les paraules al nou array
        array2.push(array1[i]);
    }
}

//Calcular longitud la de la paraula més llarga
for (var i=0; i<array2.length; i++){
    if (cont < array2[i].length){
		cont = array2[i].length;
	}
}

//Xuleta per veure l'array2 (que conté unicament les paraules - havent eliminat tots els espais -) 
console.log(array2);

//Longitud de la paraula mes llarga
console.log("Longitud maxima: " +cont);

//Mostrar la quantitat total de caracters
console.log("Longitud del total:" +array2.length);
