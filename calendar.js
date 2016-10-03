/**
 * Calendar is a part of Respire:
 * https://github.com/einse/respire
 */

var Calendar = {
	/**
	 * today(param);
	 * 
	 * Returns the present day in various formats.
	 * 
	 * The date used in all examples for this function
	 * is October 1, 2016
	 */
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
		
		// Output example: 01.10.2016
		if (param === '' || param === '.') {
			return day + '.' + month + '.' + year;
		}
		
		// Output example: 2016.10.01
		if (param === 'r' || param === 'r.') {
			return year + '.' + month + '.' + day;
		}
		
		// Output example: 2016-10-01
		// This format is ISO standard. Learn more:
		// http://www.w3schools.com/js/js_date_formats.asp
		if (param === 'r-' || param === 'iso') {
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
		
		// Default: ISO.
		// Output example: 2016-10-01
		// This format is ISO standard. Learn more:
		// http://www.w3schools.com/js/js_date_formats.asp
		return year + '-' + month + '-' + day;
	},
	/**
	 * isValid(dateString);
	 * 
	 * Returns true or false whether dateString represents 
	 * a correct date (using Proleptic Gregorian calendar). 
	 * 
	 * The parameter dateString should contain
	 * an ISO-formatted date. For example: "2016-01-03" for 
	 * October 3, 2016.
	 * 
	 * Dates under 1000-01-01 are not supported: therefore
	 * Calendar.isValid('999-12-31') {or earlier} will return false;
	 */
	isValid: function (dateString) {
		var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		var monthNumberJS;
		var isLeapYear = false;
		
		/** 
		 * Parsing the dateString
		 * (Only positive numbers will pass.)
		 */
		var parsed = dateString.split('-');
		if (parsed.length !== 3) {
			//~ console.log('array length');
			return false;
		}
		for (var value in parsed) {
			parsed[value] = Number(parsed[value]);
			if (parsed[value] === 0) {
				//~ console.log('zero');
				return false;
			}
			if (isNaN(parsed[value])) {
				//~ console.log('type', typeof parsed[value], parsed[value]);
				return false;
			}
		}
		
		/**
		 * Year number test
		 */
		if (parsed[0] < 1000) {
			console.error("Calendar.js: Dates under 1000 CE are not supported.");
			return false;
		}
		
		/** 
		 * Leap year test
		 */
		isLeapYear = false;
		if (parsed[0] % 400 === 0)
		{
			isLeapYear = true;
		} else {
			if (parsed[0] % 4 === 0) {
				isLeapYear = true;
			}
			if (parsed[0] % 100 === 0) {
				isLeapYear = false;
			}
		}
		
		/** 
		 * Month number test
		 */
		if (parsed[1] > 12) {
			//~ console.log('month > 12');
			return false;
		}
		
		/**
		 * Day number test
		 */
		monthNumberJS = parsed[1] - 1;
		if (parsed[2] > dayCount[monthNumberJS]) {
			if (monthNumberJS === 1 && parsed[2] === 29 && isLeapYear) {
				return true;
			}
			//~ console.log('day test failed');
			return false;
		}
		
		return true;
	},
	prev: function (dateString) {
	},
	next: function (dateString) {
	}
};
