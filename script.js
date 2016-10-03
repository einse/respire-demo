var keyName = {
	Ctrl: 17,
	Enter: 13
};

var keyMap = {
	17: false,
	13: false
};

$(document).keydown(function (event) {
	var $focused;
	
	if (event.keyCode in keyMap) {
		keyMap[event.keyCode] = true;
	}
	
	if (keyMap[keyName['Ctrl']] && keyMap[keyName['Enter']]) {
		// On Ctrl+Enter, create new entry
		$focused = $(".entry:focus");
		$focused.after('<div class="entry" contentEditable="true"></div>').next().focus();
	}
});

$(document).keyup(function (event) {
	if (event.keyCode in keyMap) {
		keyMap[event.keyCode] = false;
	}
});

$(".entry:first").html(Calendar.prev(Calendar.today()));

// TODO: See .data() in jQuery 3.x
// TODO: Fix for multiple entry-set
$(".entry-set:first").attr('data-d', Calendar.today());

$(".entry:last").focus();
