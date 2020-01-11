let menu = document.getElementById('topNav');
let btn = document.getElementById('menu')

btn.onclick = function(){
	if (menu.ClassList.contains('nav')){
		menu.ClassList.add('responsive');
	}
	else{
		menu.ClassList.remove('responsive')
	}
}

