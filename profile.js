
const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');

function alertColor() {
    alert("My favorite color is purple")
}

function alertPlace() {
    alert("My favorite place is the University of Utah campus")
}

function alertRitual() {
    alert("My favorite ritual waking up and enjoying a cup of coffee")
}

color.addEventListener("click", alertColor);
place.addEventListener("click", alertPlace);
ritual.addEventListener("click", alertRitual);