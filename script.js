window.onload = function () {
	function addBefore(dateToSet) {
		// TODO: Find any other solutions
		var content = '<div class="set" data-d="' + dateToSet + '">\
				<div class="set__entry">' + dateToSet + '</div>\
				<div class="set__entry" contenteditable></div>\
			</div>'
		$('.set:first').before(content);
	};
	
	function addAfter(dateToSet) {
		// TODO: Find any other solutions
		var content = '<div class="set" data-d="' + dateToSet + '">\
				<div class="set__entry">' + dateToSet + '</div>\
				<div class="set__entry" contenteditable></div>\
			</div>'
		$('.set:first').before(content);
	};
	
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
	// TODO: 
	// 1. Create one column.
	// 2. Set 'data-d'.
	// 3. Write 'data-d' to 'set__entry:first'.
	// 4. Add 2 additional columns for yesterday and tomorrow.
	// 5. Call prev('today') & next('today')
	//    & then repeat (2-3) for added columns.
	//~ $(".set:first").attr('data-d', C$.prev(C$.today()));
	//~ $(".set:first .set__entry:first").html(C$.prev(C$.today()));
	//~ $(".set:nth-child(2)").attr('data-d', C$.today());
	//~ $(".set:nth-child(2) .set__entry:first").html(C$.today());
	//~ $(".set:last").attr('data-d', C$.next(C$.today()));
	//~ $(".set:last .set__entry:first").html(C$.next(C$.today()));

	//~ $(".set:nth-child(2) .set__entry:last").focus();

	$('.set:first').attr('data-d', C$.today());
	$(".set:first .set__entry:first").html($('.set:first').attr('data-d'));
	$(".set:first .set__entry:last").focus();

	// TODO: Add button press handling
	$('.mount__button').click(function(event) {
		var earliest = {};
		var latest = {};
		
		earliest.date = $('.set:first').attr('data-d');
		latest.date = $('.set:last').attr('data-d');
		
		var action = $(event.target).attr('data-a');
		console.log(action);
		
		if (action === 'b') {
			console.log(earliest.date, C$.prev(earliest.date));
			addBefore(C$.prev(earliest.date));
		}
		if (action === 'f') {
			console.log(latest.date, C$.next(latest.date));
		}
	});
};
