<template>
	<div>
		<h1>{{ year }}</h1>
		<div class="daysOfYearContainer">
			<div v-for="(month, index) in monthTab" :key="index">
				<days-of-month :month="month" :year="year" :holidays="holidays"></days-of-month>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {
			response: fetch("http://vps-4401e6e0.vps.ovh.net/api/v2/PublicHolidays/" + this.year + "/FR")
				.then((response) => response.json())
				.then((data) => (this.holidays = data)),
			holidays: [],
		};
	},
	props: { year: Number },
	watch: {},
	methods: {},
	computed: {
		monthTab: function () {
			return Array.from({ length: 12 }, (value, index) => index + 1);
		},
	},
	components: { DaysOfMonth },
};
</script>

<style lang="css" scoped>
h1 {
	text-align: center;
}
p {
	text-align: center;
}
.daysOfYearContainer {
	display: flex;
	overflow-x: scroll;
	overflow-y: hidden;
}
</style>
