
		function jian(num) {
	var price = document.getElementsByName("danjia")[num].innerText; //获取单价
	var count = parseInt(document.getElementsByName("shu")[num].value) - 1; //得到数量减一
	if(count < 0) {
		alert("不能在减啦");
		return;
	}
	document.getElementsByName("shu")[num].value = count; //将减后的值赋值给文本框
	var sum = parseInt(price * count);
	document.getElementById("xiaoji" + num).innerText = "¥" + sum;
	totail();
}

function jia(num) {
	var price = document.getElementsByName("danjia")[num].innerText;
	var count = parseInt(document.getElementsByName("shu")[num].value) + 1;
	document.getElementsByName("shu")[num].value = count;
	var sum = parseInt(price * count);
	document.getElementById("xiaoji" + num).innerText = "¥" + sum;
	totail();
}

function totail() {
	var prise = document.getElementsByName("danjia");
	var count = document.getElementsByName("shu");
	var sum = 0;
	for(var i = 0; i < prise.length; i++) {
		sum += prise[i].innerText * count[i].value;
	}
	document.getElementById("zongjia").innerText="¥"+sum;
	return sum;
}

function OK() {
	alert("恭喜你！购买成功!\n共消费"+totail());

}