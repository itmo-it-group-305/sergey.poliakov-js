/**
 * Created by sergeypoliakov on 25.11.15.
 */
var arr = [ [1,2], [1,3]];

//Вот так обращаться к элементу двухмерного массива
arr[0][1];
var obj = {};
var str = 'age';
obj.age=10;

//Так присвоится str
//obj.str=10;
obj[str]=100;

//Так задается метод
obj.sum=function(x,y){ return x+y;}
console.log (obj.sum(10,23))

//Перебор свойств
for (var i )