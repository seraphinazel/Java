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
var j; //счетчик решеток в ряду
for (i=1; i<=20; i++) {
	for (j=1; j<=i; j++) {
		console.log("x");
	}
	console.log("\n");
}