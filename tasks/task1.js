(function () {

	// Zadanie 1 
	// Pobierz wartość z inputa (id: randomNumber) i sprawdź czy jest równa szczęśliwej liczbie (7)
	// Jeżeli po kliknieciu przycisku "losuj" szczesliwa liczba rowna sie siedem w div'ie "resultContainer1" dodaj tekst "Gratulacje, wygrałeś!" 
	// (Pokolorowany na zielono), a jeżeli nie dodaj to napis "Niestety przegrałeś" (pokolorwany na czerwono)

  
	let luckyNumber = "7"

	$('#task1SubmitButton').on('click', () => {
		let number = $('#randomNumber').val()
		
		if (!isNumeric(number))
		{
			$('#resultContainer1').html('')
			return;
		}

		if (number == luckyNumber)
		{
			$('#resultContainer1').html('Gratulacje, wygrałeś!').css("color", "green")
		}
		else {
			$('#resultContainer1').html('Niestety przegrałeś').css("color", "red")
		}
	})

	function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
  

})();