
var r = 0;
var objs1 = document.getElementsByTagName('i');
	window.onload = function(){
		for(var i=0;i<objs1.length;i++){
			objs1[i].onclick = function(event){
			    var current = event.target.getAttribute('current');
			    current = (parseInt(current)+90)%180;
			    event.target.setAttribute('current',current);
			    event.target.style.transform = 'rotate('+current+'deg)';
			}
		}
	};
	   	
