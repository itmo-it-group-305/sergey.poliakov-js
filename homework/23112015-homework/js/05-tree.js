/**
 * Created by sergeypoliakov on 23.11.15.
 */
var tree=window.prompt('Введите высоту треугольника, который вы хотите нарисовать');
var longstar=tree;
var stars = 1;
var longstar = 1;

while (tree > 0) {
    document.write ("<p align='center'>");
    while (stars > 0) {
        stars--;
        document.write ("*");
    }
    document.write("</p>")
    tree--;
    longstar+=2;
    stars=longstar;
}

