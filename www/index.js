"use strict";

window.onload = function() {

	var name = [ "노성화", "박용범", "유형덕", "김성호", "송재우", "김승범", "한태희", "허태량",
	             "차규원", "이강진", "오송이", "이승진", "한창수", "강성진", "좌행복", "이혜주", "황지선",
	             "김세미", "유승범", "최일환", "서동일", "전영범", "이현주", "정두리", "노의현", "박헌웅",
	             "이유라", "김종현", "석지호" ];

	var dup = new Array();
	var countBox = document.getElementById("countBox");
	var count = document.getElementById("input");
	var random, duplist, run;
	var flag = true;
	var error = false;

	count.size = 5;
	count.value = 10;

	function init() {
		dup = new Array();
		clearInterval(run);
		error = false;
	}

	function clearList() {
		countBox.innerHTML = "";
		var myNode = document.getElementById("nameBox");
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}}

	function startCount(count) {
		error = true;
		run = setInterval(function() {
			countBox.innerHTML = count--;
			if (count < 0) {
				clearInterval(run);
				error = false;
				if (run > 0)
					runRandom();
			}}, 500);
	}

	function runRandom() {
		if (dup.length > name.length - 1) {
			init();
			countBox.innerHTML = "전원 출력!";
			return;
		}
		random = Math.floor(Math.random() * name.length);
		if (flag == true) {
			//console.log("No duplication!");
			for (var j = 0; j <= dup.length;) {
				if (dup[j] != random) {
					if (j == dup.length) {
						dup[j] = random;
						break;
					}
					j++;
				} else {
					random = Math.floor(Math.random() * name.length);
					j--;
				}}}
		//console.log(random, dup.length);
		countBox.innerHTML = name[random];
	}

	document.getElementById("btn").onclick = function() {
		count = document.getElementById("input");
		if (error == false) {
			startCount(count.value);
		}};

	document.getElementById("btn2").onclick = function() {
		var txt = document.createElement("div");
		txt.setAttribute("class", "list");
		txt.innerHTML = name[random] + " ";

		if (duplist != txt.innerHTML && error == false && random != null) {
			document.getElementById("nameBox").appendChild(txt);
			duplist = txt.innerHTML;

		}};

	document.getElementById("btnReset").onclick = function() {
		clearList();
		init();
	};

	document.getElementById("btnDup").onclick = function() {
		flag = false;
		document.getElementById("btnNoDup").style.display = "inline-block";
		document.getElementById("btnDup").style.display = "none";
	};

	document.getElementById("btnNoDup").onclick = function() {
		flag = true;
		document.getElementById("btnNoDup").style.display = "none";
		document.getElementById("btnDup").style.display = "inline-block ";
	};

	document.getElementById("btnNoCount").onclick = function() {
		count.value = 0;
	};
};