var nav = document.querySelector("nav");
var con = document.getElementById("contact");
var b = false;

con.addEventListener("mouseover", function() {
	b = true;
});

nav.addEventListener("mouseover", function() {
	if (b) {
		alert("Don't forget to send your message!");
		b = false;
	}
});