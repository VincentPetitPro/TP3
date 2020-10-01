//const HelloOtherWorld = window.httpVueLoader("./components/HelloOtherWorld.vue");

var app = new Vue({
	el: "#app",
	data: {
		selectedMonth: new Date().getMonth() + 1,
		selectedYear: new Date().getFullYear(),
	},
	methods: {
		getDaysInMonth: function (month, year) {
			return new Date(year, month, 0).getDate();
		},
		daysOfMonth: function (month, year) {
			tab = [];
			days = this.getDaysInMonth(month, year);
			for (let i = 0; i < days; i++) {
				tab.push(i);
			}
			return tab;
		},
		dayName: function (day) {
			days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			dateURL =
				this.selectedMonth + "/" + (parseInt(day, 10) + parseInt(1, 10)) + "/" + this.selectedYear;
			dayDate = new Date(dateURL).getDay();
			return days[dayDate];
		},
	},
	computed: {
		years: function () {
			return Array.from({ length: 2100 - 1900 }, (value, index) => 1901 + index);
		},
	},
	components: {},
});
