;(function gallery(){
	var prew = document.getElementById('prew'),
		next = document.getElementById('next'),
		imgNumber = 1,
		maxImages = 5;

	prew.addEventListener('click', moveBackvard);
	next.addEventListener('click', moveForvard);

	function moveForvard() {
		var image = document.getElementById('image');
		imgNumber ++;
		if (imgNumber >= maxImages) {
			imgNumber = 1;
		}
		image.setAttribute('src', 'images/' + imgNumber +'.jpg');
	}

	function moveBackvard() {
		var image = document.getElementById('image');
		imgNumber --;
		if (imgNumber == 0) {
			imgNumber = maxImages;
		}
		image.setAttribute('src', 'images/' + imgNumber +'.jpg');
	}	
})();