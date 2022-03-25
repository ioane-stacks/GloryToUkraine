const canvas = document.createElement('canvas');
document.body.append(canvas);

const canvasWidth = parseInt(window.getComputedStyle(document.body).getPropertyValue('width'));
const canvasHeight = parseInt(window.getComputedStyle(document.body).getPropertyValue('height'));

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const ctx = canvas.getContext('2d');

const rgb = (r, g, b) => {
	return `rgb(${r}, ${g}, ${b})`;
};

const Random = (max, min) => {
	return min !== undefined ? Math.floor(Math.random() * (max - min) + min) : Math.floor(Math.random() * max);
};

const SlavaUkraine = () => {
	//ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	const posX = Random(700);
	const posY = Random(350);
	ctx.beginPath();
	ctx.fillStyle = posY > 175 ? rgb(255, Random(255, 200), 0) : rgb(0, 0, Random(255, 190));
	ctx.arc(posX + canvasWidth / 2 - 350, posY + canvasHeight / 2 - 175, 5, 0, 2 * Math.PI);
	ctx.fill();
};

const Start = setInterval(() => {
	SlavaUkraine();
}, 10);
