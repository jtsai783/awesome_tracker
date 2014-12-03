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
		this.collection.each(this.addProjectIndexItem.bind(this));
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
		$('input.project-name').val('');
	},

	render: function () {
		var content = this.template({
			projects: this.collection
		});
		$('nav a.link-to-home').text('AwesomeTracker');
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});