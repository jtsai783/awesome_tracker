'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
var $ = window.$;
// var console = window.console;
AwesomeTracker.Views.ProjectIndex = Backbone.CompositeView.extend({

	template: JST.project_index,

	events: {
		'click button.new-project': 'newProject'
	},

	initialize: function () {
		this.listenTo(this.collection, 'add', this.addProjectIndexItem);
	},

	addProjectIndexItem: function (project) {
		var subview = new AwesomeTracker.Views.ProjectIndexItem({
			model: project
		});
		this.addSubview('.project-index', subview);
	},

	newProject: function () {
		var userId = $('p.username').data('userid');
		var title = $('input.project-name').val();
		this.collection.create({
			user_id: userId,
			title: title
		});
	},

	render: function () {
		var content = this.template({
			projects: this.collection
		});
		this.$el.html(content);
		return this;
	}
});