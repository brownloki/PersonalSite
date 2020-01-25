//changes color scheme from dark to light for the entire page
function toggleDarkMode() {
	var check = document.getElementById('darkModeCheck');
	if (check.checked) {
		$('body, nav').css("background-color", "#1b1b1b");
		$('h2').css("color", "#1565c0");
		$('h3').css("color", "#bbdefb");
		$('p').css("color", "#efebe9");
		$('nav ul li a, nav ul li a:visited').css("color", "white");
		$('#nav-navigation').css("color", "white");
	}

	else {
		$('body, nav').css("background-color", "white");
		$('h2').css("color", "black");
		$('h3, nav ul li a, nav ul li a:visited, #nav-navigation').css("color", "#003c8f");
		$('p').css("color", "black");
		$('#footer-text').css("color", "white");
	}
}

//switches the image displayed in the highlights section with hovering
function imageSwitch(sectionName) {
	var highlightsImg = document.getElementById("highlights-img");
	if (sectionName == "organized") {
		highlightsImg.src = "img/organized.jpg";
	}
	else if (sectionName == "motivated") {
		highlightsImg.src = "img/motivated.jpg";
	}
	else if (sectionName == "analytical") {
		highlightsImg.src = "img/analytical.png";
	}
}

//expands the form as the user clicks on the "next" button
var formCounter = 0;
function expandForm() {
	formCounter++;

	if (formCounter == 1) {
		$("#second-form-section").slideToggle();
	}
	else if (formCounter == 2) {
		$("#third-form-section").slideToggle();
		$("#contact-next-button").hide();
		
	}
}

//gets the data from the form and alerts a JSON string containing the data
function getFormData() {
	var formNameData = document.getElementById("contact-name").value;
	var formEmailData = document.getElementById("contact-email").value;
	var formPhoneData = document.getElementById("contact-phone").value;
	var formMessageData = document.getElementById("contact-message").value;

	var formObject = {
		c_name: formNameData,
		c_email: formEmailData,
		c_phone: formPhoneData,
		c_message: formMessageData
	};

	alert(JSON.stringify(formObject));
}

//expands the nav and shifts body down in tablet/mobile views
function toggleNav() {
	$('#nav-list').slideToggle();
	var main = document.querySelector("main");
	if (main.style.top == "300px") {
		$('main').css("top", "96px");
		$('footer').css("top", "96px");
	}
	else {
		$('main').css("top", "300px");
		$('footer').css("top", "300px");
	}
	
}

//add an event listener for window resizing, makes sure nav bar always works
window.addEventListener("resize", function() {

    if (window.matchMedia("(min-width: 1200px)").matches) {
        $('#nav-navigation').hide();
        $('#nav-list').show();
        document.getElementById("contact-message").cols = 80;
        $('main').css("top", "196px");
        $('footer').css("top", "196px");		
    }
    else {
    	$('#nav-navigation').show();
    	$('#nav-list').hide();
    	document.getElementById("contact-message").cols = 32;
    	$('main').css("top", "96px");	
    	$('footer').css("top", "196px");	
    }
});