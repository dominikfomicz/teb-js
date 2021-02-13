(function() {

	// Zadanie 5

	// Po klinknieciu w przycisk "dodaj Kwadraty" za pomocą metody "createElement" stworz 5 obiektow typu "div"
	// i ustylizuj je tak by mialy wysokosc i szerokosc ustawiona na 100px (mozna to zrobic ustawiajac atrybuty "style" lub dodac class'e za pomoca metody: classname.add('...'))
	// Ustaw takze dla kazdego kwadratu inny losowy (background)kolor (mozna uzyc do tego metody getRandomColor)
	// Nastepnie kazdy kwadrat nalezy dodac do naszej strony HTML i umiescic go w div'ie o id: "squaresContainer" (METODA: appendChild)

	// Uwaga: tworzenie i dodawanie kwadratow najlepiej zrobic za pomoca petli ale jesli ktos zrobi bez nie bedzie to mialo wplywu na ocenę
	// Uwaga: nowyKwadrat.style.width = '100px' (pamiętać o cudzysłowiach)


	// function getRandomColor() {
	// let color = '#' + Math.floor(Math.random()*16777215).toString(16)
	// return color;
	// }

	function getRandomColor()
	{
		return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	}

	function addFiveSquares()
	{
		for (let i = 0; i < 5; i++)
		{
			$('#squaresContainer').append(`
			<div style='width:100px; height:100px; background-color: ${getRandomColor()}'></div>
			`)
		}
	}

	$('#task5SubmitButton').on('click', () => {
		addFiveSquares()
	})

})()