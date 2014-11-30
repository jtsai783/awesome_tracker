'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.ProjectIndexItem = Backbone.View.extend({
	template: JST.project_index_item,

	events: {
		'click': 'clickHandler'
	},

	clickHandler: function () {
		var id = this.model.get('id');
		var url = '/project/' + id;
		Backbone.history.navigate(url, {trigger: true});
	},


	render: function () {
		this.$el.addClass('project-index-item');
		var content = this.template({
			project: this.model
		});
		this.$el.html(content);
		return this;
	}
});