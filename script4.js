function getObject(x) {
	var x = prompt('Введите число от 0 до 999');
	var obj={};
	if(parseInt(x)>999 || parseInt(x)<0 || isNaN(parseInt(x))) { //проверяем корректность ввода
		console.log('Введены некорректные данные');
		return obj = {}; // возвращаем пустой объект
	} else {
		var N = x.split(''); //создаем массив из введенных цифр
		if (N.length == 3) {
			obj.единицы=N[2];
			obj.десятки=N[1];
			obj.сотни=N[0];
		} 
		else if (N.length == 2) {
			obj.единицы=N[1];
			obj.десятки=N[0];
		} 
		else {
			obj.единицы=N[0];
		}
	}
	return obj;
}

console.log(getObject());