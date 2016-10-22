'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("JS Button Pressed");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);

	function projectClick(e){
		console.log("Project clicked")
		e.preventDefault();
		$(this).css("background-color", "#7FFF00");

		var projectTitle = $(this).find("p").text();
		var jumbotronHeader = $(".jumbotron h1");
		jumbotronHeader.text(projectTitle);

		var containingProject = $(this).closest(".project");
		var description = $(containingProject).find(".project-description");

		if(description.length == 0){
			containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
		}
		else
			$(".project-description").toggle();

		var containingProjectImg = $(this).closest(".project img");
		$(".project").closest("img").toggle();

	};
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}