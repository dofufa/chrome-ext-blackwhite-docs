console.log('ext-button-hello-ext');

ext();

function ext() {
	d = document;
	q = d.querySelectorAll('*');
	q.forEach((a) => {
		a.style.color='black';
		a.style.backgroundColor = 'white';
	});
}
