[].forEach.call(document.querySelectorAll('.photo'), function(photo) {
	var img = photo.querySelector('.photo--image'),
		virtualImg = document.createElement('img'),
		isResponsive = false;

	var onLoad = function (e) {
		virtualImg.removeEventListener('load', onLoad);
		virtualImg.removeEventListener('error', onLoad);
		photo.className += ' photo-loaded';
	}

	virtualImg.addEventListener('load', onLoad);
	virtualImg.addEventListener('error', onLoad);

	if(img.parentNode.tagName.toLowerCase() === 'picture') {
		var virtualParent = img.parentNode.cloneNode(true)
		virtualParent.removeChild(virtualParent.querySelector('.photo--image'))
		virtualParent.appendChild(virtualImg);
		isResponsive = true;
	}

	if(img.srcset) {
		virtualImg.srcset = img.srcset;
		if(!isResponsive) {
			document.createElement.appendChild(virtualImg);
		}
	} else if(img.src) {
		virtualImg.src = img.src;
	}


	if(isResponsive && !window.HTMLPictureElement) {
		if(window.picturefill){
			window.picturefill({elements: [virtualImg]});
		} else if(img.src) {
			virtualImg.src = img.src;
		}
	}
});
