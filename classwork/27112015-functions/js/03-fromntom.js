/**
 * Created by sergeypoliakov on 27.11.15.
 */
function fromto(n,m) {
    var leng;
    leng = m - n;
    if (leng <=0) {
        return 'Error'
    }
    else {
        var x = n;
        for (i = 0; i < leng; i++) {
            n++;
            x+=n;
        }
        return x
    }
}