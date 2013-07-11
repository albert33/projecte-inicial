/*
 * 1. Defineix una funció max() que accepti dos nombres com a paràmetres i en retorni
 * el més gran. Utilitza l'estructura if-else de JavaScript
 */

var max = function (n1,n2){
	if (n1 >= n2){
		return n1;
	} else {
		return n2;
	}
};
console.log("El numero mes gran es: " + max(10,5));


/*
 * 2. Defineix una funció maxOfThree() que accepti tres nombres com a paràmetres i
 * en retorni el més gran. Reutilitza funcions anteriors.
 */

var maxOfThree = function(n1,n2,n3){
	if (n1 >= n2 && n1 >= n3){
		return n1;
	} else if (n2 >= n1 && n2 >= n3){
		return n2;
	} else {
		return n3;
	}
};
console.log("El numero mes gran es: " + maxOfThree(10,5,17));


/*
 * 3. Escriu una funció isVowel() que accepti un caracter (una frase de longitud 1) i
 * retorni el booleà 'true' si és una vocal, 'false' si és una consonant.
 */

var isVowel = function (char){
	 return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1
};
console.log(isVowel("a"));

/*
 * 4. Escriu una funció translate() que tradueixi les frases en un idioma inventat.
 * Les vocals s'han de repetir amb la lletra 'p' entremig. Per exemple:
 * "Un bon dia" esdevindria "Upun bopon dipiapa".
 */


var fOriginal = "Un bon dia";
var vocals = ["a","e","i","o","u"];

var translate = function (fOriginal){
	var fModif = fOriginal.split("");
	var cont =0;
	
		for (var i=0; i<fModif.length; i++){
			for (var j=0; j<vocals.length; j++){
				if (fModif[i].toLowerCase() === vocals[j]){
					fModif.splice(i+1,0,"p"+vocals[j]);
				}
			}
		}
	return fModif.join("");
};
console.log("Original: "+fOriginal);
console.log("Modificada: "+translate(fOriginal));

/*
 * 5. Defineix una funció sum() i una multiply() que retornin el resultat de
 * sumar o multiplicar respectivament tots els nombres en l'array donat com a paràmetre.
 * Per exemple, sum([1,2,3,4]) hauria de retornar 10.
 */

var sum = function (array){
	var suma=0;
	for (var i=0; i<array.length; i++){
		suma += array[i];
	}
	return suma;
};

var multiply = function (array){
	var mult=1;
	for (var i=0; i<array.length; i++){
		mult *= array[i];
	}
	return mult;
};

console.log("Suma = "+sum([1,2,3,4]));
console.log("Multiplicacio = "+multiply([1,2,3]));

/*
 * 6. Defineix una funció reverse() que doni la volta a una frase.
 * Per exemple, reverse("Un bon dia") seria "Aid nob nu".
 */

var fraseOriginal = "Un bon dia";

var reverse = function (fraseOriginal){
	var f2 = fraseOriginal.split("").reverse().join("").toLowerCase();
	f2 = f2.split("");
	f2[0] = f2[0].toUpperCase();
	return f2.join("");
};

console.log("Original: " +fraseOriginal);
console.log("Invertida: " +reverse(fraseOriginal));


/*
 * 7. Escriu una funció findLongestWord() que prengui un array de paraules
 * i retorni la longitud de la més llarga.
 */

var array = ["hola","any","estudiar"];

var findLongestWord = function(array){
	var cont=0;
	for (var i=0; i<array.length; i++){
		if (cont <= array[i].length){
			cont = array[i].length;
		}
	}
	return cont;
};
console.log("La paraula mes llarga te: "+findLongestWord(array)+" caracters.");

/*
 * 8. Escriu una funció filterLongWords() que prengui com a paràmetres un
 * array de paraules i un enter len, i retorni l'array de paraules que són
 * més llargues o iguals que len.
 */

var array = ["hola","any", "mes","barcelona","casa","cotxe"];
var len= 4;

var filterLongWords = function (array,len){
	var arrayLlargues = [];
	for (var i=0; i<array.length; i++){
		if (array[i].length >= len){
			arrayLlargues.push(array[i]);
		}
	}
	return arrayLlargues;
};
console.log(filterLongWords(array,len));

/*
 * 9. Escriu una funció charFreq() que prengui una cadena de text i construeixi
 * un llistat de freqüència d'aparició de cada caràcter de la cadena.
 * Representa el llistat com un Objecte Javascript, on a la propietat "a" li correspon
 * un enter que és el nombre de vegades que apareix aquesta lletra a la cadena d'entrada.
 * Si una lletra no apareix no cal que estigui definida a l'objecte.
 */


var cadena = "Hola que tal";
var charFreq = function (cadena){
	var cad2 = cadena;
	var cont=0;
	//Contador de les vegades que apareix una lletra
	var cont2=0;
	//Creem l'objecte
	var llistat = {};
	while (cont<cad2.length){
		var c = cad2[cont];
		cont2=cad2.split(c).length -1;
		if (c !== " "){
			console.log("Lletra: "+c+" - "+cont2);
			//Aqui no se si creo bé l'objecte
			llistat.c = cont2;
		}
	cont++;
	}
};
charFreq(cadena);









