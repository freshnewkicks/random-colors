const btn = document.querySelector('#btn');
const body = document.body;
const h1 = document.querySelector('h1');

btn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const a = Math.floor(Math.random() * 256);

	body.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${a})`;
    h1.innerText = `rgb(${r}, ${g}, ${b}, ${a})`
});