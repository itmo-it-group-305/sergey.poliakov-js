/**
 * Created by sergeypoliakov on 27.11.15.
 */
function object(obj) {
    var x = obj.name;
    var y = obj.date;
    var z = obj.descrition;
    var b = obj.image;
    return x + " " + y + " " + z + " " + b;
}


var obj = {
    name: "Achtung Baby",
    date: "19.11.1991",
    descrition: "After Rattle and Hum, U2 went away to 'dream it all up again.' Achtung Baby was widely regarded as a sonic and visual reinvention of the band: a step too far in some territories, where Adam's nude image on the sleeve was covered with an appropriately fixed X or clover. At U2's request, Achtung Baby was the first album by a major act to be released in two eco-friendly packages - the jewel box (without the long box attachment) and the cardboard Digi-Trak. The Digi-Trak featured long-box sizes cardboard, which, once its shrink-wrap and two plastic struts are removed, folds around the CD. In Germany, Universal released a 2-CD box set with a copy of both Achtung Baby and Zooropa.",
    image: "http://media.u2.com/non_secure/images/20090214/discography/albumcover_achtungb/600.jpg",
    showyourself: function () {
        var x = obj.name;
        var y = obj.date;
        var z = obj.descrition;
        var b = obj.image;
        return x + " " + y + " " + z + " " + b},
    hear: function() {
        alert('I singing the song')}
}

