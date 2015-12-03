/**
 * Created by sergeypoliakov on 25.11.15.
 */
var arr = ['1','2','3','4','5'];

for (i in arr) {
    arr[i]=+arr[i];
}

//Решение из класса

var arr2 = ['1','2','3','4','5'];
var arr2_r = [];
for (var i in arr2) {
    arr2_r.push(parseInt(arr[i]))
}