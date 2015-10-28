[].forEach.call(document.querySelectorAll('img'), function(img) {
	console.log('img.load');
	var virtualImg = document.createElement('img');
	
	virtualImg.addEventListener('load', function () {
		console.log('img.loaded');
	})
});