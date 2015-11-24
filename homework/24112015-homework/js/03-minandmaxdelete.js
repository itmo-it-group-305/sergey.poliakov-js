/**
 * Created by sergeypoliakov on 24.11.15.
 */
var arr=[12,4,3,10,1,20];
var max = arr[0];
var mini = arr[1];

for (var i=0; i < arr.length; i++) {
    if (arr[i] <= mini) {
        mini = arr[i];
        //console.log(mini);
    }
    if (arr[i] >= max) {
        max = arr[i];
    }
}

for (var i=0; i < arr.length; i++) {
    if (arr[i]==max) {
        delete arr[i]
    }
    if (arr[i]==mini) {
        delete arr[i]
    }
}


alert("Массив без большего и нижнего значения" + arr);