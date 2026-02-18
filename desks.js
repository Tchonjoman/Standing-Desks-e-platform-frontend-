	const menu = document.getElementById('nav');
		let clicked = true
		let myFunction = function () {
			if(clicked){
				menu.style.transform = 'translateX(0%)';
				clicked = false;	
			}
			else{
				menu.style.transform = 'translateX(100%)';
				clicked = true;
			}
			
		}