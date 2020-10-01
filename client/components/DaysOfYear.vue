<template>
	<div>
		<p>{{ year }}</p>
		<div class="daysOfYearContainer">
			<days-of-month :month="1" :year="2020"></days-of-month>
			<days-of-month :month="2" :year="2020"></days-of-month>
			<days-of-month :month="3" :year="2020"></days-of-month>
			<days-of-month :month="4" :year="2020"></days-of-month>
			<days-of-month :month="5" :year="2020"></days-of-month>
			<days-of-month :month="6" :year="2020"></days-of-month>
			<days-of-month :month="7" :year="2020"></days-of-month>
			<days-of-month :month="8" :year="2020"></days-of-month>
			<days-of-month :month="9" :year="2020"></days-of-month>
			<days-of-month :month="10" :year="2020"></days-of-month>
			<days-of-month :month="11" :year="2020"></days-of-month>
			<days-of-month :month="12" :year="2020"></days-of-month>
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
	components: { DaysOfMonth },
};
</script>

<style lang="css" scoped>
p {
	text-align: center;
}
.daysOfYearContainer {
	display: flex;
	overflow-x: scroll;
}
</style>
