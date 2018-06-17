//2)
var i=0;
do {
	if (i==0) {
		console.log(i+" - это ноль")
	} else if ((i%2)!=0) {
		console.log(i+" - это нечетное число")
	} else {
		console.log(i+" - это четное число")
	}
	i++;
} while (i<=10);

//3)
for(i=0; i<10; console.log(i++)) {
}

//4)
var x="#";
var num;
for(num=1; num<=20; num++) {
	console.log(x);
	x += "#";
}