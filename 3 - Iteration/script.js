console.log('Start');

/*   Aufgabe 1:  While-Schleife
*   -----------------------------------
*   While-Schleife erstellen von 1-10 und Wert Ausgeben
*/
function whileDo() {
    var i = 0;
    while(i <= 10) {
        console.log(i);
        i++;
    }
}
whileDo();
/*   Aufgabe 2: Do...While-Schleife
*   -----------------------------------
*   Do-While Schleife zum Testen ob Eingabe richtig ist
*/
function doWhile() {
    var i = 0
    do {
        console.log(i);
        i++;
    } while(i<=10)
}
doWhile();

/*
*   Aufgabe 3: For-Schliefe
*   -----------------------------------
*/

for(var i=1; i<=10; i++){
    console.log(i);
}

/*   Aufgabe 4: Multiplikation / Division
*   -----------------------------------
*/

function multiplikation (zahl1, zahl2) {
    for(var i=1; i<zahl2; i++){
        zahl1+= zahl1;
    }

    console.log(zahl1);
}

function multiplikationNegativ (zahl1, zahl2) {
    if(zahl2 < 0) {
        for(var i=-1; i>zahl2; i--){
            zahl1-= zahl1;
        }  
    } else {
        for(var i=1; i<zahl2; i++){
            zahl1+= zahl1;
        }    
    }

    console.log(zahl1);
}

/*   Aufgabe 5: Durchschnittsberechnung
*   -----------------------------------
*/

function durchschnittsberechnung(zahlen) {
    var i = 0;
    var durchschnitt = 0;

    while(i < zahlen.length) {
        durchschnitt += zahlen[i];
        i++;
    }
    durchschnitt = durchschnitt / i;
    return durchschnitt;
}
/*
*   Aufgabe 6: Median
*   -----------------------------------
*   Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
*
*   if bmi <= 18.5 return "Underweight"
*
*   if bmi <= 25.0 return "Normal"
*
*   if bmi <= 30.0 return "Overweight"
*
*   if bmi > 30 return "Obese"
*/



/*   Aufgabe 6: Median
*   -----------------------------------
*/

function median(zahlen) {
    var medianIndex = zahlen.length / 2;
    return zahlen[medianIndex];
}

/*   Aufgabe 7: Summe aller positiven Zahlen
*   -----------------------------------
*   You get an array of numbers, return the sum of all of the positives ones.
*
*   Example [1,-4,7,12] => 1 + 7 + 12 = 20
*
*    Note: if there is nothing to sum, the sum is default to 0.
*/

