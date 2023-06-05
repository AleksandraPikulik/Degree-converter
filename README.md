<img src="Screenshot.png">

# Degree-converter

## General Information
Web application to convert temperature - degrees Celsius to degrees Fahrenheit or vice versa.

## Technologies
Project is created with:
* HTML
* CSS
* JavaScript

## Features
- allows you to convert the value expressed in a given unit into another unit,
- limitation of entering only numbers,
- conversion of values to 0.1, 
- to clear the tool just press "reset".

## Code fragment with calculation formula
```
const convertion = () => {
	if (one.textContent === '°C' && convInput.value != '') {
		let resultC = convInput.value * 1.8 + 32;
		pResult.textContent = `${convInput.value}°C to ${resultC.toFixed(1)}°F`;
		convInput.value = '';
	} else if (one.textContent === '°F' && convInput.value != '') {
		let resultF = (convInput.value - 32) / 1.8;
		pResult.textContent = `${convInput.value}°F to ${resultF.toFixed(1)}°C `;
		convInput.value = '';
	}
};
```

## Acknowledgements
The design of the website was created while learning the JavaScript course from MMC School (https://mmcschool.pl/kursy/kurs-javascript.html)

## Contact
Feel free to contact me:
<br> 
Email: aleksandrawypych.p@gmail.com 
Portfolio: https://www.behance.net/aleksanwypych-p
