//Функция getPercents(percent, number), которая возвращает {percent} процентов от {number}.

export function getPercents(percent, number) {
	return number / 100 * percent;
}

//alert( getPercents(30, 200) );// Получаем 60