opened=false;
menus=document.getElementsByClassName('with-sub');
elems=document.getElementsByClassName('sub-menu');
for (var i=0;i<menus.length;i++){
	menus[i].onclick=function(){
		attr=this.getAttribute('id')
		console.log(attr);
		for(i=0;i<menus.length;i++){
			menus[i].removeAttribute('id', '');
		}
		for(i=0;i<elems.length;i++){
			elems[i].style.height="0px";
		}
		nextNodes=this.nextSibling.nextSibling.childNodes[1].childNodes;
		sub_menu_num=nextNodes.length - (parseInt(nextNodes.length/2) + 1);
		sub_height=document.getElementById('mes').offsetHeight;
		height_to_set=sub_menu_num * sub_height;
		this.nextSibling.nextSibling.style.height= height_to_set + "px";
		if(attr=='active'){
			this.removeAttribute('id');
			this.nextSibling.nextSibling.style.height="0px";
		}
		else{
			this.setAttribute('id', 'active');
		}
		opened=true;
	};
}