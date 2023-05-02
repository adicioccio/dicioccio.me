window.addEventListener('load', function() {
	var h1 = document.querySelector('h1');
	h1.addEventListener("animationend", function() {
		document.querySelector('h2').style.opacity = 1;
	});
	h1.classList.add('visible');
});

function showContentExperience(index) {
	var menuItems = document.querySelectorAll(".menu-item-experience");
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove("active");
	}
	menuItems[index].classList.add("active");
	var bottomContainer = document.getElementById("bottom-container-experience");
	switch (index) {
		case 0:
			bottomContainer.innerHTML = '<img class="experience-logo" src="images/argo.jpg"></img>';
			break;
		case 1:
			bottomContainer.innerHTML = '<img class="experience-logo" src="images/algonquin.png"></img>';
			break;
	}
}

function showContentProjects(index) {
	var menuItems = document.querySelectorAll(".menu-item-projects");
	for (var i = 0; i < menuItems.length; i++) {
		menuItems[i].classList.remove("active");
	}
	menuItems[index].classList.add("active");
	var bottomContainer = document.getElementById("bottom-container-projects");
	switch (index) {
		case 0:
			bottomContainer.innerHTML = "<h1>00</h1><p>This is the content for 00.</p>";
			break;
		case 1:
			bottomContainer.innerHTML = "<h1>01</h1><p>This is the content for 01.</p>";
			break;
		case 2:
			bottomContainer.innerHTML = "<h1>02</h1><p>This is the content for 02.</p>";
			break;
		case 3:
			bottomContainer.innerHTML = "<h1>03</h1><p>This is the content for 03.</p>";
			break;
	}
}