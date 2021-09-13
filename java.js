var menu = document.getElementById("menu")
var navigetion = document.getElementById("navigetion")
var menubtn = document.getElementById("menubtn")
var man= document.getElementById("man")

var click1 = document.getElementById("click1")
var searchtxt = document.getElementById("searchtxt")
var click1btn = document.getElementById("click1btn")

menu.onclick = function()
{
	if(navigetion.style.right == "-260px")
	{
		navigetion.style.right = "0";		
		menubtn.src = "close1.ico";
	}
	else
	{
		navigetion.style.right = "-260px";
		menubtn.src = "menu.ico";
	}
}
click1.onclick = function()
{
	if(searchtxt.style.top == "682px")
	{
		searchtxt.style.top  = "335px";		
	}
	else
	{
		searchtxt.style.top = "682px";		
	}
}

click1btn.onclick = function()
{
	if(click1.style.left == "5%")
	{
		click1.style.left = "60%";
	}
	else
	{
		click1.style.left = "5%";
	}
}

