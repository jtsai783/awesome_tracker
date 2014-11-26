'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
// var console = window.console;
AwesomeTracker.Views.ProjectIndex = Backbone.CompositeView.extend({

	template: JST.project_index,

	initialize: function () {
		this.listenTo(this.collection, 'add', this.addProjectIndexItem);
	},

	addProjectIndexItem: function (project) {
		var subview = new AwesomeTracker.Views.ProjectIndexItem({
			model: project
		});
		this.addSubview('.project-index', subview);
	},

	render: function () {
		var content = this.template({
			projects: this.collection
		});
		this.$el.html(content);
		return this;
	}
});