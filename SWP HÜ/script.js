"use strict";
/*
const ul = document.getElementById("meineUL");

function addElement() {
    const li = document.createElement("li");
    li.innerHTML = "Neues Element";
    ul.appendChild(li);
}
*/

function addElement(){

let text = document.getElementById("text");
let textEingabe = text.value;
let meineUL = document.getElementById("meineUL");
let li = document.createElement("li");
li.appendChild(document.createTextNode(textEingabe));
meineUL.appendChild(li);
text.value = "";
}