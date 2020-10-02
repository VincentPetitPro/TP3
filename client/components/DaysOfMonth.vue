<template>
	<div class="container">
		<h2>{{ monthNames[this.selectedMonth - 1] }}</h2>
		<ul>
			<li v-bind:key="day" v-for="day in daysOfMonth(this.selectedMonth, this.selectedYear)">
				<p class="day-number">{{ day + 1 }}</p>
				<p :class="getClass(day)">{{ dayName(day) }}</p>
				<p v-show="getClass(day)" style="margin: 1px">{{ getLocalName(day) }}</p>
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
	props: { month: Number, year: Number, holidays: Array },
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
		getClass: function (day) {
			let date =
				this.year + "-" + this.getGoodFormat(this.month) + "-" + this.getGoodFormat(day + 1);
			for (let i = 0; i < this.holidays.length; i++) {
				if (date == this.holidays[i].date) {
					return "holiday-name";
				}
			}
		},
		getLocalName: function (day) {
			let date =
				this.year + "-" + this.getGoodFormat(this.month) + "-" + this.getGoodFormat(day + 1);
			for (let i = 0; i < this.holidays.length; i++) {
				if (date == this.holidays[i].date) {
					return this.holidays[i].localName;
				}
			}
		},
		getGoodFormat: function (num) {
			switch (num) {
				case 1:
					return "01";
				case 2:
					return "02";
				case 3:
					return "03";
				case 4:
					return "04";
				case 5:
					return "05";
				case 6:
					return "06";
				case 7:
					return "07";
				case 8:
					return "08";
				case 9:
					return "09";
				default:
					return num;
			}
		},
	},
	/* 	computed: {
		monthA: function () {
			switch (this.month) {
				case 1:
					return "01";
				case 2:
					return "02";
				case 3:
					return "03";
				case 4:
					return "04";
				case 5:
					return "05";
				case 6:
					return "06";
				case 7:
					return "07";
				case 8:
					return "08";
				case 9:
					return "09";
				default:
					return this.month;
			}
		},
	}, */
};
</script>

<style lang="css" scoped>
p {
	margin: 10px;
}
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
	border-radius: 80px;
	padding: 4px;
	width: 112px;
	height: 112px;
	margin: 2px;
}
.holiday-name {
	font-weight: 900;
	color: #be0027;
}
.day-number {
	font-size: 24px;
}
</style>
