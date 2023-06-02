const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const pResult = document.querySelector('.result');
const convInput = document.querySelector('#converter');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F';
		two.textContent = '°C';
		pResult.textContent = '';
	} else {
		one.textContent = '°C';
		two.textContent = '°F';
	}
};

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

const reset = () => {
	pResult.textContent = '';
	convInput.value = ''
};

changeBtn.addEventListener('click', swap);
convBtn.addEventListener('click', convertion);
resetBtn.addEventListener('click', reset);
