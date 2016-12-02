function clickColor() {
	var main = document.getElementsByClassName("main");
	var header = document.getElementById("header");
	var oHead = header.getElementsByTagName("a");
	for(var i = 0; i < oHead.length; i++) {
		oHead[i].index = i;
		oHead[i].onclick = function() {
			for(var i = 0; i < oHead.length; i++) {
				oHead[i].style.borderBottom = "";
				oHead[i].style.color = "";
				main[i].style.display = "none";
			}
			this.style.borderBottom = "2px solid red";
			this.style.color = "red";
			main[this.index].style.display = "block";
		}
	}
}
clickColor();

function broadCast() {
	var oUl = document.getElementById("ul1");
	var oLi = oUl.getElementsByTagName("li");
	var time1 = null;
	var time2 = null;
	oUl.innerHTML += oUl.innerHTML;
	oUl.style.height = oLi[0].offsetHeight * oLi.length + "px";
	time1 = setInterval(start, 30);

	function start() {
		if(oUl.offsetTop < -oUl.offsetHeight / 2) {
			oUl.style.top = 0;
		}
		oUl.style.top = oUl.offsetTop - 1 + "px";
		if(oUl.offsetTop % oLi[0].offsetHeight == 0) {
			clearInterval(time1);
			time2 = setTimeout(function() {
				time1 = setInterval(start, 30)
			}, 1500);
		}

	}
	oUl.onmouseover = function() {
		clearInterval(time1);
		clearTimeout(time2);
	}
	oUl.onmouseout = function() {
		time2 = setTimeout(function() {
			time1 = setInterval(start, 30);
		}, 2000);
	}

}
broadCast();

function handOver() {
	var img = ["img/index1.png", "img/upcoming-light.png", "img/find-light.png", "img/person-light.png"]
	var ul1 = document.getElementsByClassName("ul1")[0];
	var aA = ul1.getElementsByTagName("a");
	var pict = ul1.getElementsByClassName("pict");

	/*var oLi = ul1.getElementsByTagName("li");
	for(var i=0;i<oLi.length;i++){
		var imgs = document.createElement("img");
		imgs.src = img[i];
		imgs.style.position = "absolute";
		imgs.style.top = 5+"px";
		imgs.style.marginLeft = -11+"px";
		imgs.style.display = "none";
		oLi[i].appendChild(imgs);
	}*/

	for(var i = 0; i < aA.length; i++) {
		aA[i].index = i;
		aA[i].onclick = function() {
			for(var i = 0; i < aA.length; i++) {
				aA[i].style.color = "";
				pict[i].style.display = "";

			}
			this.style.color = "red";
			pict[this.index].style.display = "block";

			pict[this.index].style.top = 5 + "px";
			pict[this.index].style.marginLeft = 76.5 + "px";
		}
	}
}
handOver();