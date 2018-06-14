//1)
/*var a = 1, b = 1, c, d;
c = ++a; 
alert(c); // c=2, a=2 -  сначала инкремент а, потом присваивание
d = b++; 
alert(d); // d=1, b=2 - сначала присваивание, потом инкремент b
c = (2+ ++a); 
alert(c); // c=5, a=3 - сначала инкремент, потом сложение и присваивание
d = (2+ b++); //сначала сложение с предыдущим значением b, потом инкремент b
alert(d); // 4
alert(a); // 3
alert(b); // 3 

//2)
var a = 2;
var x = 1 + (a *= 2);
// x = 5 - умножение с присваиванием, т.е. a=a*2
*/

//3)
var a=-8;
var b=2;
if (a>=0 && b>=0) {
	alert(a-b);
}
else if (a<0 && b<0) {
	alert(a*b);
}
else {
	alert(a+b);
}

//4)
var a=parseFloat(prompt("Введите число от 0 до 15"));
switch(a) {
	case 0:
		document.write("0");
	case 1:
		document.write("1");
	case 2:
		document.write("2");
	case 3:
		document.write("3");
	case 4:
		document.write("4");
	case 5:
		document.write("5");
	case 6:
		document.write("6");
	case 7:
		document.write("7");
	case 8:
		document.write("8");
	case 9:
		document.write("9");
	case 10:
		document.write("10");
	case 11:
		document.write("11");
	case 12:
		document.write("12");
	case 13:
		document.write("13");
	case 14:
		document.write("14");
	case 15:
		document.write("15");
		break;
	default:
		document.write("Неверно выполнен ввод");
}

//5)
function sum(a,b) {
	return(a+b);
}

function minus(a,b) {
	return(a-b);
}

function mult(a,b) {
	return(a*b);
}

function div(a,b) {
	if(b!=0){
		return(a/b);
	}
	else {
		alert("на ноль делить нельзя");
	}
}

//6)
function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case 'minus':
			return minus(arg1,arg2);
			break;
		case 'mult':
			return mult(arg1,arg2);
			break;
		case 'sum':
			return sum(arg1,arg2);
			break;
		default:
			return NaN;
			break;
	}
}

//7)
alert(null==0); //false - потому что 0 - это число, значение. 
				// null - это отсутствие значения, как бы "ничто".

//8)
function power(val, pow) {
	if(pow==1) {
		return val;
	}
	if(pow>0) {
		var temp=val*power(val, pow-1);
		console.log(temp);
		return temp;
	} else if (pow<0) {
		return (1/val) * (power(val, pow+1));
	} else {
		return 1;
	}
	
}

