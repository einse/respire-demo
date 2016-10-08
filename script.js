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
	var offsetTop;
	var $prev;
	var prev;
	var prevOffsetTop;
	var prevParentNodeWidth;
	
	if (event.keyCode in keyMap) {
		keyMap[event.keyCode] = true;
	}
	
	if (keyMap[keyName['Ctrl']] && keyMap[keyName['Enter']]) {
		// On Ctrl+Enter, create new entry
		$focused = $(".set__entry:focus");
		$focused.after('<div class="set__entry" contenteditable></div>').next().focus();
		$focused = $(".set__entry:focus");
		offsetTop = $focused[0].offsetTop;
		//~ console.log(offsetTop);
		//~ $focused.attr('data-offsetTop', offsetTop);
		
		$prev = $focused.prev();
		prev = $prev[0];
		prevOffsetTop = prev.offsetTop;
		if (offsetTop < prevOffsetTop) {
			//~ console.log('less! clientWidth', prev.clientWidth);
			//~ console.log('less! offsetWidth', prev.offsetWidth);
			//~ console.log('less! parentNode.offsetWidth', prev.parentNode.offsetWidth);
			//~ console.log('less! parentNode.clientWidth', prev.parentNode.clientWidth);
			prevParentNodeWidth = $(prev.parentNode).width();
			//~ console.log(prevParentNodeWidth);
			$(prev.parentNode).width(prevParentNodeWidth + prev.clientWidth);
			prevParentNodeWidth = $(prev.parentNode).width();
			//~ console.log(prevParentNodeWidth);
		}
	}
});

$(document).keyup(function (event) {
	if (event.keyCode in keyMap) {
		keyMap[event.keyCode] = false;
	}
});

// TODO: See .data() in jQuery 3.x
// TODO: Fix for multiple set
$(".set:first").attr('data-d', Calendar.prev(Calendar.today()));
$(".set:first .set__entry:first").html(Calendar.prev(Calendar.today()));
$(".set:last").attr('data-d', Calendar.today());
$(".set:last .set__entry:first").html(Calendar.today());

$(".set:last .set__entry:last").focus();
