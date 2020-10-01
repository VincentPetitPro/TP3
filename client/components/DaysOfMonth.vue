<template>
	<div class="container">
		<h2>{{ monthNames[this.selectedMonth - 1] }}</h2>
		<ul>
			<li v-bind:key="day" v-for="day in daysOfMonth(this.selectedMonth, this.selectedYear)">
				<p class="day-name">{{ dayName(day) }}</p>
				<p class="day-number">{{ day + 1 }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {
			selectedMonth: this.month,
			selectedYear: this.year,
			monthNames: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
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

<style lang="css" scoped>
.container {
	border-right: 1px solid black;
}
h2 {
	text-align: center;
}
ul {
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	width: 534px;
	margin: 10px;
	padding: 0;
}
li {
	border: 1px;
	background-color: #00bce4;
	border-radius: 50px;
	padding: 4px;
	width: 92px;
	height: 92px;
	margin: 2px;
}
.day-name {
	font-size: 16px;
}
.day-number {
	font-size: 24px;
}
</style>
