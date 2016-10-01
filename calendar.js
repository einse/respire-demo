/**
 * Calendar is a part of Respire:
 * https://github.com/einse/respire
 * 
 * The date which is using for examples is October 1, 2016
 */

var Calendar = {
	today: function (param) {
		var d = new Date();
		var day = d.getDate();
		var month = d.getMonth();
		var year = d.getFullYear();
		var ru = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
			'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
		
		/**
		 * I. Verbal output of month
		 */
		
		// Output example: 1 октября 2016
		if (param === 'ru') {
			month = ru[month];
			return day + ' ' + month + ' ' + year;
		}
		
		/**
		 * II. Numeric output of month
		 */

		// Actual number of the month
		month = month + 1;
		// Leading zero for one-digit month
		if (month < 10) {
			month = '0' + month;
		}
		
		// Leading zero for one-digit day
		if (day < 10) {
			day = '0' + day;
		}
		
		// Output example: 2016年10月01日
		if (param === 'ja') {
			return year + '年' + month + '月' + day + '日';
		}
		
		// Output example: 2016.10.01
		if (param === 'r') {
			return year + '.' + month + '.' + day;
		}
		
		// Output example: 2016-10-01
		if (param === 'r-') {
			return year + '-' + month + '-' + day;
		}
		
		// Output example: 2016/10/01
		if (param === 'r/') {
			return year + '/' + month + '/' + day;
		}
		
		// Output example: 10/01/2016
		if (param === 'a/') {
			return month + '/' + day + '/' + year;
		}
		
		// Output example (default):
		// 01.10.2016
		return day + '.' + month + '.' + year;
	},
	isValid: function (dateString) {
	},
	prev: function (dateString) {
	},
	next: function (dateString) {
	}
};
