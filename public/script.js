/*  Project:  INFO301 Hands On Project 3-3
    Author:   Jordan Price
    Date:     9/26/17
    Purpose:  
*/
//note the square brackets to denote an array and each value enclosed in quotes


var places=["Salisbury", "Easton", "Centreville", "Chesapeake City", "Elkton"];

function processPlaces(){
  var listItem = "";
  for (var i=0; i<5; i++) {
    listItem="item" + (i + 1)
    document.getElementById(listItem).innerHTML = places[i];
  }
}

window.addEventListener("load", processPlaces);