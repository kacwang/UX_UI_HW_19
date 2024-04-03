$("#hostess-image").hover(
	// on mouseenter
	function() {
		$("#hostess-image").attr("src", "images/stick-figure-inverted.png");
		// $(this).css("outline", "1px blue solid");
	},
	// on mouseleave
	function() {
		$("#hostess-image").attr("src", "images/stick-figure.png");
		// $(this).attr("src", "images/stick-figure-inverted.png");
	}
);