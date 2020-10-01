const DaysOfMonth = window.httpVueLoader("./components/DaysOfMonth.vue");
const DaysOfYear = window.httpVueLoader("./components/DaysOfYear.vue");

var app = new Vue({
	el: "#app",
	data: {
		selectedYear: new Date().getFullYear(),
	},
	methods: {
		getDaysInMonth: function (month, year) {
			return new Date(year, month, 0).getDate();
		},
	},
	computed: {
		years: function () {
			return Array.from({ length: 2100 - 1900 }, (value, index) => 1901 + index);
		},
	},
	components: { DaysOfYear, DaysOfMonth },
});
