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
var a=12;
switch(a) {
	case 12:
		alert(a);
		alert(a+1);
		alert(a+2);
		alert(a+3);
		break;
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
	return(a/b);
}

//6)
function mathOperation(arg1, arg2, operation) {
	if (arg1>=0 && arg2>=0) {
		operation='minus';	
	}
	else if (arg1<0 && arg2<0) {
		operation='mult';
	}
	else {
		operation='sum';	
	}
	switch(operation) {
		case 'minus':
			return(arg1-arg2);
			break;
		case 'mult':
			return(arg1*arg2);
			break;
		case 'sum':
			return(arg1+arg2);
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
	return val*power(val, pow-1);
}

