'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.ProjectIndexItem = Backbone.View.extend({
	template: JST.project_index_item,

	render: function () {
		this.$el.addClass('project-index-item');
		var content = this.template({
			project: this.model
		});
		this.$el.html(content);
		return this;
	}
});