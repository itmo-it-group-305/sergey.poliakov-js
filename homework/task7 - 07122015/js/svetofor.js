/**
 * Created by sergeypoliakov on 04.12.15.
 */

var first = document.getElementById("first");
var second = document.getElementById("second");

    setTimeout('first.setAttribute("class", "red")', 1000);
    setTimeout('first.removeAttribute("class")', 2000);
    setTimeout('second.setAttribute("class", "green")', 2000);
    setTimeout('second.removeAttribute("class")', 4000);



