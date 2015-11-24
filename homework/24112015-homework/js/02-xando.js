/**
 * Created by sergeypoliakov on 24.11.15.
 */
var area = [ null, null, null, null, null, null, null, null, null ]

for (var i=0;i<area.length;i+=2){
    area[i]=1;
}

for (i=1;i<area.length;i+=2){
    area[i]=0;
}

document.write('<table border="3px solid black"> <tr>')

for (var i=0;i<area.length;i++) {
    if (i%2==0) {
        document.write('<td background="#000000">X</td>');
    }
    else {
        document.write('<td>0</td>');
    }
    console.log(i);
    if (i!=0 && (i+1)%3==0) {
        document.write('</tr><tr>');
    }
}

document.write('</tr></table>')