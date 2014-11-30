'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST.project_show,

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	render: function () {
		var content = this.template({
			project: this.model
		});
		this.$el.html(content);
		return this;
	}
});