var cell = "<td></td>"; //создаем "клетку" таблицы (таблица 10х10, потому что еще нумерация строк и столбцов)
for (var i=0; i<9; i++) { //создаем цепочку из 10 "клеток"
	cell+= "<td></td>";
}

var table="";
for (var i=0; i<10; i++) {
	table+= "<tr>"+cell+"</tr>"; //оборачиваем клетки в строку и делаем 10 строк
}

var desk = document.createElement("table"); //создаем таблицу
desk.innerHTML = table; //добавляем в нее полученный выше внутренний "каркас"
desk.style.border = 'solid';
desk.style.width = '400px';
desk.style.height = '400px';
document.body.appendChild(desk);

var cells = document.getElementsByTagName('td'); //создаем массив "клеток"





for(var i=0; i<10; i++) {
	for(var j=0; j<10; j++) {
		cells[i*j].style.background = 'black';
	}
}

















