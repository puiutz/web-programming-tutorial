// show/hide more info
document.getElementById('show-info').onclick = function () {
    document.getElementById('more-info').style.display='inline';
    document.getElementById('show-info').style.display='none';
};

document.getElementById('hide-info').onclick = function () {
    document.getElementById('more-info').style.display='none';
    document.getElementById('show-info').style.display='inline';
};

// collapse/expand news widget
var newsWidget = document.getElementById("news-widget");
newsWidget.getElementsByClassName("header")[0].onclick = function () {
    if (newsWidget.className == "widget") {
        newsWidget.className = "widget collapsed";
    } else {
        newsWidget.className = "widget";
    }
};

// actions for top links
var links = document.getElementById("top-menu").getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById("breadcrumb").innerHTML = this.innerHTML + " : " + this.title;
    }
}

var todayDay = new Date().getDate(); // find corect day
var days = document.getElementById('calendar').getElementsByTagName('td');
for (var i = 0; i < days.length; i++) {
	if(todayDay == days[i].innerHTML) {
		days[i].className = "today";
	}
}