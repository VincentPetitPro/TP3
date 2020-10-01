<template>
	<div>
		<h1>{{ year }}</h1>
		<div class="daysOfYearContainer">
			<div v-for="(month, index) in monthTab" :key="index">
				<days-of-month :month="month" :year="year"></days-of-month>
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function () {
		return {};
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
