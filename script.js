(function () {
    function loadBefore(dateToSet) {
        var set_ = document.createElement('div');
        set_.className = 'set';
        set_.setAttribute('data-d', dateToSet);
        
        var title_entry = document.createElement('div');
        title_entry.className = 'set__entry';
        title_entry.innerText = dateToSet;
        
        var ordinary_entry = document.createElement('div');
        ordinary_entry.className = 'set__entry';
        ordinary_entry.setAttribute('contentEditable', '');
        
        set_.appendChild(title_entry);
        set_.appendChild(ordinary_entry);
        
        var content = set_;
        $('.set:first').before(content);
    };
    
    function loadAfter(dateToSet) {
        var set_ = document.createElement('div');
        set_.className = 'set';
        set_.setAttribute('data-d', dateToSet);
        
        var title_entry = document.createElement('div');
        title_entry.className = 'set__entry';
        title_entry.innerText = dateToSet;
        
        var ordinary_entry = document.createElement('div');
        ordinary_entry.className = 'set__entry';
        ordinary_entry.setAttribute('contentEditable', '');
        
        set_.appendChild(title_entry);
        set_.appendChild(ordinary_entry);
        
        var content = set_;
        $('.set:last').after(content);
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
        }
    });

    $(document).keyup(function (event) {
        if (event.keyCode in keyMap) {
            keyMap[event.keyCode] = false;
        }
    });

    $('.mount__button').click(function(event) {
        var earliest = {};
        var latest = {};
        var action;
        
        earliest.date = $('.set:first').attr('data-d');
        latest.date = $('.set:last').attr('data-d');
        
        action = $(event.target).attr('data-a');
        
        if (action === 'b') {
            for (var i = 0; i < 3; i++) {
                loadBefore(C$.prev(earliest.date));
                earliest.date = $('.set:first').attr('data-d');
            }
        }
        if (action === 'f') {
            for (var i = 0; i < 3; i++) {
                loadAfter(C$.next(latest.date));
                latest.date = $('.set:last').attr('data-d');
            }
        }
    });
    
    $('.set:first').attr('data-d', C$.today());
    $(".set:first .set__entry:first").html($('.set:first').attr('data-d'));
    $(".set:first .set__entry:last").focus();
})();
