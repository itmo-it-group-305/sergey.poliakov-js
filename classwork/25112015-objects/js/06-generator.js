/**
 * Created by sergeypoliakov on 25.11.15.
 */
var sogl=["ц","к","н","г"];
var glas=["а","ы","о","э"];
gramm = ['c','г','с','г','c'];
slovo = '';

for (var i in gramm) {
    if (gramm[i]='c') {
        var max = 4;
        var min = 0;
        var ch = sogl[Math.floor(Math.random()*(max-min+1))+min];
        slovo+=ch;
        /*дописать код, который будет геренировать слово
        *
        * */
    }
    else {
        var max = 4;
        var min = 0;
        var ch = glas[Math.floor(Math.random()*(max-min+1))+min];
        slovo+=ch;
    }
}


/*
Задана

Задать алфавит согласных
Задать алфавит гласных
Задать грамматику (в каком виде нужно решить)
Можно сделать в переменной
Можно в массиве
Грамматику можно сделать циклом
Легче всего задать е
slovo += s
Добавить рандомизатор*/
