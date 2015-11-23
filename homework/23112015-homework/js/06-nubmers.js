/**
 * Created by sergeypoliakov on 23.11.15.
 */
alert ('Введите три числа');
var x=window.prompt('x=');
var y=window.prompt('y=');
var z=window.prompt('z=');
alert (x);
alert (y);
alert (z);
var low = 0, middle = 0, high = 0;

if (x < y && x < z) {
    low = x;
    if (y < z) {
        middle = y;
        high = z;
    }
    else {
        middle = z;
        high = y;
    }
}

else if (y < x && y < z) {
    low = y;
    if (x < z) {
        middle = x;
        high = z;
    }
    else {
        middle = z;
        high = y;
    }
}

else if (z < x && z < y) {
    low = z;
    if (x < y) {
        middle = x;
        high = y;
    }
    else {
        middle = y;
        high = x;
    }
}

x = low;
y = middle;
z = high;

alert (x);
alert (y);
alert (z);