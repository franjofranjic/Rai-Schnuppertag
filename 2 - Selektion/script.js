console.log('Start');

/*   Aufgabe 1: Selektion 1.0
*   -----------------------------------
*/
function hasValue() {
    if(true){

    } else if(false) {

    }
}

/*   Aufgabe 2: Selektion 2.0
*   -----------------------------------
*/
function hasValue() {
    if(true){

    } else {

    }
}

/*   Aufgabe 3: Boolsches Algebra 1.0
*   -----------------------------------
*/
if(true && false) {
    console.log("true");
} else {
    console.log("false");
}

/*   Aufgabe 4: Boolsches Algebra 2.0
*   -----------------------------------
*/
function hasValue() {
    if(true || false) {
        console.log("true");
    } else {
        console.log("false");
    }
}

/*   Aufgabe 5: Noten Function
*   -----------------------------------
*/

function noteAnzeige(note) {
    if(note < 4) {

    } else if(note > 4) {

    }
}

/*   Aufgabe 6: Switch-Case
*   -----------------------------------
*/

function WerDarfMit(person) {
    switch(person){
        case oma: 
        case onkel: 
        case mama: 
        case tante: 
            console.log("Nö die darfen nicht mit");
            break;
        case papa:
        case opa:
            console.log("SAUFN");
            break;
        default:
            break;
    }
}

/*   Aufgabe 7: Trinkspiel
*   -----------------------------------
*/
function whatDrink(alter) {
    if(alter < 18) {
        console.log("nichts da");
    } else if(alter < 80 && alter > 50) {
        console.log("ein Whiskey")
    } else if(alter >=18 && alter < 45) {
        console.log("zwei Bierchen");
    } else {
        console.log("paar Whiskeys");
    }
}