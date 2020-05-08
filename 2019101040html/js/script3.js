var arr=[ "../img/gol1.jpg", "../img/gol2.jpg","../img/gol3.jpg","../img/gol4.jpg","../img/gol5.jpg" ]
var i=0;
function gallery()
{
    i++;
    var x=arr[i];
    i=i%5;
    document.getElementById("gal").src=arr[i];
}