/**
 * Created by sergeypoliakov on 24.11.15.
 */
var submit = document.getElementById('submit');

function addCity() {
    var txt = document.getElementById('txt');
    yourCity = txt.value;
    var parent = document.getElementById('city');
    var child = document.createElement("option");
    child.setAttribute("value", "yourCity");
    child.innerHTML = '<option value="3">' + yourCity + '</option>';
    parent.appendChild(child);
}

submit.addEventListener("click", addCity);

