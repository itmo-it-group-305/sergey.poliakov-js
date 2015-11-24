/**
 * Created by sergeypoliakov on 23.11.15.
 */
var arr=[2,3,7,13,5,0,20];
var sum=0;
var max = arr[0];
var mini = arr[1];

for (var i=0; i < arr.length; i++) {
    if (arr[i] <= mini) {
        mini = arr[i];
        console.log(mini);

    }
    if (arr[i] >= max) {
        max = arr[i];
    }
    sum+=arr[i];
}

console.log(mini);
console.log(max);


//console.log(sum);
var middleSum = 0;
var leng = arr.length;
//console.log(leng);
middlesum = sum / leng;
//console.log(middlesum);

arr.shift();
arr.pop();
//console.log(arr);