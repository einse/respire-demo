/**
 * Calendar is a part of Respire:
 * https://github.com/einse/respire
 */

var Calendar = {
	today: function (param) {
		var d = new Date();
		var day = d.getDate();
		var month = d.getMonth();
		var year = d.getFullYear();
		var ru = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
			'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		
		// Month: Verbal output
		if (param === 'ru') {
			month = ru[month];
			return day + ' ' + month + ' ' + year;
		}
		
		// Month: Numeric output
		month = month + 1;
		if (month < 10) {
			month = '0' + month;
		}
		if (param === 'ja') {
			return year + '年' + month + '月' + day + '日';
		}
		if (param === 'r') {
			return year + '.' + month + '.' + day;
		}
		if (param === 'r-') {
			return year + '-' + month + '-' + day;
		}
		return day + '.' + month + '.' + year;
	}
};
