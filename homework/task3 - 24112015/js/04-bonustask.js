/**
 * Created by sergeypoliakov on 24.11.15.
 */
var arr=[12,4,3,10,1,20];
var mini = Infinity;
var leng = arr.length;
var leng2 = (leng*2);

while (arr.length < leng2) {
    for (var i=0; i < leng; i++) {
        if (arr[i] < mini) {
            mini = arr[i];
        }
    }

    arr.push(mini);

    for (var i=0; i < leng; i++) {
        if (arr[i]==mini) {
            delete arr[i];
        }
    }

    mini=Infinity;
}


for (var i=0; i < (leng); i++) {
    arr.shift();
}

alert('Массив, выстроенный по возрастанию' + arr);
