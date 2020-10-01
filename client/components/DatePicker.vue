<template>
	<div>
		<p>Il y a {{ getDaysInMonth(this.selectedMonth, this.selectedYear) }} jours dans ce mois.</p>
		<ul>
			<li
				v-bind:key="day"
				style="list-style: none"
				v-for="day in daysOfMonth(this.selectedMonth, this.selectedYear)"
			>
				{{ day + 1 }} : {{ dayName(day) }}
			</li>
		</ul>
		<select v-model="selectedMonth">
			<option value="1">January</option>
			<option value="2">February</option>
			<option value="3">March</option>
			<option value="4">April</option>
			<option value="5">May</option>
			<option value="6">June</option>
			<option value="7">July</option>
			<option value="8">August</option>
			<option value="9">September</option>
			<option value="10">October</option>
			<option value="11">November</option>
			<option value="12">December</option>
		</select>
		<select v-model="selectedYear">
			<option v-bind:key="year" v-for="year in years" :value="year">{{ year }}</option>
		</select>
	</div>
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
	computed: {
		years: function () {
			return Array.from({ length: 2100 - 1900 }, (value, index) => 1901 + index);
		},
	},
};
</script>
