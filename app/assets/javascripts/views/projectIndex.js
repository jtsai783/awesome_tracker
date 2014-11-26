'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.ProjectIndex = Backbone.View.extend({

	template: JST.project_index,

	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},

	render: function () {
		var content = this.template({
			projects: this.collection
		});
		this.$el.html(content);
		return this;
	}
});