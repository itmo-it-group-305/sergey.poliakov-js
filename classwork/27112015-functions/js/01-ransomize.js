/**
 * Created by sergeypoliakov on 27.11.15.
 */
var images=['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var images=[{img: '1.jpg', desription: 'blabla'}];
var html="";

for (i=o; i<images.length, i++) {
    var ind = Math.floor(Math.random()*(images.length-1-0+1))+min;
    var html+='div id="row"' + '<img src="'+ 'images[ind]' +'"/>' + '</div>';
    images.splyce(ind,1);
}

var g = document.getElementById("gallary");
g.innerHTML=html;