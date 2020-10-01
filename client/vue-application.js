const HelloOtherWorld = window.httpVueLoader("./components/HelloOtherWorld.vue");
const DatePicker = window.httpVueLoader("./components/datePicker.vue");

var app = new Vue({
	el: "#app",
	data: {
		parentSelectedMonth: new Date().getMonth() + 1,
		parentSelectedYear: new Date().getFullYear(),
	},
	components: { DatePicker },
});
