var cell = "<td></td>"; //создаем "клетку" таблицы
for (var i=0; i<9; i++) { //создаем цепочку из "клеток"
	cell+= "<td></td>";
}

var table="";
for (var i=0; i<10; i++) {
	table+= "<tr>"+cell+"</tr>"; //оборачиваем клетки в строку
}

var desk = document.createElement("table"); //создаем таблицу
desk.innerHTML = table; //добавляем в нее полученный выше внутренний "каркас"
desk.style.border = 'solid'; //граница для доски
desk.style.borderCollapse = 'collapse'; // чтобы не дублировались границы ячеек
desk.style.width = '500px';
desk.style.height = '500px';
document.body.appendChild(desk); // выводим в документ

var cells = document.getElementsByTagName('td'); //создаем массив "клеток"
var flag = true; //флаг для смены последовательности раскраски ячеек в строках

for(var i=0; i<100; i+=2) {
	if(i%10==0){
		flag=!flag;
	}
	if(flag) {
		cells[i].style.background = 'black';
	} else {
		cells[i+1].style.background = 'black';
	}
}

for(var i=0; i<100; i++) { //раскраска ячеек, не являющихся доской - тех, что для нумерации
	if (i<10 || i>89 || (i%10==0)||(i%10==9)) {
		cells[i].style.background = 'white';
	}
	cells[i].style.border = 'solid';
	cells[i].style.width = '40px';
	cells[i].style.height = '40px';
}

for(var i=1; i<99; i++) { //нумерация строк цифрами, плюс центровка содержимого
	if (i%10==0 && i<90){
		cells[i].innerText = 9-(parseInt(i/10));
	} else if (i%10==9 && i>10) {
		cells[i].innerText = (i-9)/10;
	}
	cells[i].style.textAlign = 'center';
}

var letters = ['A','B','C','D','E','F','G','H']; //нумерация столбцов буквами плюс центровка
for(var i=1; i<99; i++) {
	if (i<9){
		cells[i].innerText = letters[8-i];
	} else if (i>90) {
		cells[i].innerText = letters[i-91];
	}
	cells[i].style.textAlign = 'center';
}
