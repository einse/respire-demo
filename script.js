$(document).keypress(function (e) {
	if (e.keyCode === 13) { /* enter */
		// Create new entry
		var focused = $(".entry:focus");
		focused.after('<div class="entry" contentEditable="true"></div>').next().focus();
		e.preventDefault();
	}
});

$(".entry:first").html(Calendar.today('ru'));
$(".entry:last").focus();
