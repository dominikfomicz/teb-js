(function() {

	// Zadanie 3 
	// po kliknieciu przycisku "Oblicz sume", oblicz sumę liczb WIĘKSZYCH od 10 z podanej tablicy liczb (numbersArray) i 
	// wypisz w div'ie o id: resultContainer3 tą obliczoną sumę

	let numbersArray = [10, 2, 5, 11, 20, 100, 5, -8, 7];
	showArr()

	$('#task3SubmitButton').on('click', () => {
		calculate()
	})

	function showArr()
	{
		let numbersArrayDiv = document.getElementById('numbersArray');
		numbersArrayDiv.innerHTML = numbersArray;
	}

	function calculate()
	{
		let sum = 0;
		for (let i = 0; i < numbersArray.length; i++)
		{
			if (numbersArray[i] > 10)
			{
				sum = sum + numbersArray[i]
			}
		}
		$('#resultContainer3').html(`Suma: ${sum}`)
	}

	// Zadanie 4

	// PO kliknieciu przycisku "Dodaj liczbe",
	// do tablicy: "numbersArray" dodaj kolejna liczbe podana przez uzytkownika w inpucie o id: numberToAddToArray

	// Dodatkowo lista liczb ktora jest widoczna na stronie (zadanie 3) powinna zostac odswiezona (powinna rozniez wyswietlac ta dodana liczbe)
	// UWAGA: jezeli chcesz z inputa dostac liczbe, zastosuj funkcje parseInt np: parseInt(wartoscInputa)
	// UWAGA: przed dodaniem do tablicy sprawdz czy wartosc rzeczywiscie nie jest nullem (np kiedy w inpucie nie zostala podana zadna liczba)


	$('#task4SubmitButton').on('click', () => {
		let num = $('#numberToAddToArray').val()
		if (!isNumeric(num))
		{
			return;
		}
		numbersArray.push(parseInt(num))
		showArr()
		calculate()
	})

	function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

})()