/**
 * Created by sergeypoliakov on 27.11.15.
 */
function add(x,y) {
    var total = x + y;
    return total;
}

//Работают только первые два аргумента

var result = add(2,3,4);

//аргументов может быть больше

var sum = 0;

function add() {
    //Переменная в функции локальная и не видна в глобальной области (за пределами этой функции или ещё где-либо)
    //Во всех языках локальная область видимости задается фигурными скобками
    var sum = 0;
    var j = arguments.length;
    for (var i = 0, i <j; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

function add() {
    return agruments[0] + agruments[1];
}

//Перегрузка функции (на самом деле это просто перезапись)

function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}

function addSomeNumber(100);
console.log(addSomeNumber(100))

//В js значения заменяется. Нужно отлавливать, чтобы не было одинаковых названий.

alert (sum(10,10));
function sum(num1, num2) {
    return num1 + num2;
}

//Так тоже можно писать, не надо парится, где находится фнукция

function execf(arg,mass) {
    alert(arg(2,3));
}
function sum(num1, num2){
    return num1 + num2;
}

execf(sum);

//функци как метод объекта

var cat = {
    name: 'Barsik',
    age: 3,
    mew: function() {
        console.log ('')
    }
}

cat.mew('Покорми меня');