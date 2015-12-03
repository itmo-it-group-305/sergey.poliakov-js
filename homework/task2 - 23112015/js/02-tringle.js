/**
 * Created by sergeypoliakov on 23.11.15.
 */

var a, b, c;

var a=window.prompt('Введите длину стороны треугольника a');
var b=window.prompt('Введите длину стороны треугольника b');
var c=window.prompt('Введите длину стороны треугольника с');

if (a==b) {
    alert('Это равнобедренный треугольник');
}

else if (c==a) {
    alert('Это равнобедренный треугольник');
}

else if (c==b) {
    alert('Это равнобедренный треугольник');
}

else {
    alert('Неравнобедренный треугольник')
}