document.getElementaryById("p2").style.color = "red";
document.write("This is how we math in JavaScript.");

var k = prompt("Pick a number");
var r = prompt("Pick another number");
var d = k + r;
var num1 = parseInt(k);
/*We parseInt'ed so the variables would be treated as INTS and not Strings*/
var num2 = parseInt(r);
var num3 = num1 + num2;

document.write("\n k is " + k + "r is " + r + "d is k + r and it's /n <br/>" + d);
document.write("<br/>multiplication:");
document.write(k * r);
document.write("<br/>division");
document.write(k / r);
document.write("<br/>addition");
document.write(k + r);
document.write("<br/>subtraction");
document.write(k - r);
document.write("<br>This is num1" +num1);
document.write("<br>This is num2" +num2);

num1++;
num2++;
document.write();
document.write();