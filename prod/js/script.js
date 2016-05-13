$( document ).ready(function() {
    
	
 
});

function fbShare(url, title, descr, image, winWidth, winHeight) {
	    var winTop = (screen.height / 2) - (winHeight / 2);
	    var winLeft = (screen.width / 2) - (winWidth / 2);
	    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
	}

	function twShare(url, title, winWidth, winHeight) {
	    var winTop = (screen.height / 2) - (winHeight / 2);
	    var winLeft = (screen.width / 2) - (winWidth / 2);
	window.open('http://twitter.com/share?url=' + url + '&text=' + title, 'intent', 'left='+ winLeft+',top='+winTop+',width=' + winWidth + ',height=' + winHeight + ',personalbar=0,toolbar=0,scrollbars=0,resizable=0');
	}