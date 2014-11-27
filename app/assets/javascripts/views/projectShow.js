'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST.project_show,

	render: function () {
		var content = this.template({
			project: this.model
		});
		this.$el.html(content);
		return this;
	}
});