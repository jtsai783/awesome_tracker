'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.AverageVelocity = Backbone.View.extend({
	template: JST.project_average_velocity,

	render: function () {
		var content = this.template({
			velocity: this.model
		});
		this.$el.addClass('average-velocity-view')
		this.$el.html(content);
		return this;
	}
});