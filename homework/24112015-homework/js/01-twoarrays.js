/**
 * Created by sergeypoliakov on 24.11.15.
 */
//Заданы два массива
//A = [ 12, 4, 3, 10, 1, 20 ]  B = [-3, -7, -100, -33]
//необходимо их объединить в один массив C добавив массив B  в конец(в начало) A.

var a = [ 12, 4, 3, 10, 1, 20 ];
var b = [-3, -7, -100, -33];
var c = a;

for (var i=0;i<b.length;i++) {
    c.push(b[i]);
}

alert('Массив B добавлен в конец массива A. C='+ c);

var c = b;
for (var i=0;i<a.length;i++){
    c.push(a[i]);
}

alert('Массив B добавлен в начало массива A. C='+ c);