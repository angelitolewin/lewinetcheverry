fetch("../../header.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("header").innerHTML = data;
});

fetch("../../footer.html")
.then(response => {
    return response.text()
})
.then(data => {
    document.querySelector("footer").innerHTML = data;
});

$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
    });
});