$(document).keypress(function (e) {
	if (e.keyCode === 13) { /* enter */
		// Create new entry
		var focused = $(".p:focus");
		focused.after('<div class="p" contentEditable="true"></div>').next().focus();
		e.preventDefault();
	}
});

$(".p:first").html(Calendar.today());
$(".p:last").focus();
