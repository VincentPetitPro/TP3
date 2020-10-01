<template>
	<ul>
		<li
			v-bind:key="day"
			style="list-style: none"
			v-for="day in daysOfMonth(this.selectedMonth, this.selectedYear)"
		>
			{{ day + 1 }} : {{ dayName(day) }}
		</li>
	</ul>
</template>

<script>
module.exports = {
	data: function () {
		return {
			selectedMonth: this.month,
			selectedYear: this.year,
		};
	},
	props: { month: Number, year: Number },
	watch: {
		month: function () {
			this.selectedMonth = this.month;
		},
		year: function () {
			this.selectedYear = this.year;
		},
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
};
</script>
