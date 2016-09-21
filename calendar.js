var Calendar = {
	today: function(locale) {
		var d = new Date();
		var month = d.getMonth();
		if (month < 10) {
			month = '0' + month;
		}
		if (locale === 'ru') {
			return d.getDate() + '.' + month + '.' + d.getFullYear();
		}
		return d.getDate() + '.' + month + '.' + d.getFullYear();
	}
};
