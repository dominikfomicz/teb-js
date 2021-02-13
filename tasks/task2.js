(function() {


	// Zadanie 2
	// Pobierz dwie wartosci z inputow ("firstNumberToCompare", "secondNumberToCompare") i sprawdz ktora liczba jest wieksza.
	// Następnie w div'ie o id: resultContainer2 po kliknieciu w przycisk "Porownaj" dodaj napis: 
	// "Wieszka liczba jest ..." (gdzie w miejsce 3 kropek trzeba wpisac ta liczbe)

	// UWAGA: Pamietaj ze div z rezultatem ma ustawiony atrybut CSS: "display" na wartość none, a więc oznacza ze nie wyswietli sie na stronie
	// Nalezy tak zmienic ten atrybut zeby napis byl widoczny na stronie

	// UWAGA: jezeli chcesz z inputa dostac liczbe, zastosuj funkcje parseInt np: parseInt(wartoscInputa)

	$('#task2SubmitButton').on('click', () => {
		let firstNum = $('#firstNumberToCompare').val()
		let secNum = $('#secondNumberToCompare').val()

		if (!isNumeric(firstNum) || !isNumeric(secNum))
		{
			$('#resultContainer2').html('').css('display', 'none')
			return;
		}

		maxVal = Math.max.apply(Math, [parseInt(firstNum), parseInt(secNum)])
		$('#resultContainer2').html(`Wieszką liczbą jest ${maxVal}`).css('display', 'block')
	})
  
	function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

})();