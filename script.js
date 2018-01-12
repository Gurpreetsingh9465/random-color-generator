var x = document.getElementById("main");
var y = document.getElementById("change");
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
y.addEventListener("click",function() {
                   var r = randomIntFromInterval(0,255);
                   var g = randomIntFromInterval(0,255);
                   var b = randomIntFromInterval(0,255);
                   var s = "rgb"+"("+r+","+g+","+b+")";
                    x.style.backgroundColor = s;
                    console.log(s);
                   })
