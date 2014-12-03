'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var $ = window.$;
AwesomeTracker.Routers.Router = Backbone.Router.extend({
	initialize: function (option) {
		this.$rootEl = option.$rootEl;
		this.projects = option.projects;
	},

	routes: {
		'project/:id': 'showProject',
		'': 'index'
	},

	index: function () {
		var indexView = new AwesomeTracker.Views.ProjectIndex({
			collection: this.projects,
		});
		this.projects.fetch();
		this._swapView(indexView);
	},

	showProject: function (id) {
		var project = this.projects.getOrFetch(id);
		var velocity = new AwesomeTracker.Models.Velocity({id: id});
		var projectShowView = new AwesomeTracker.Views.ProjectShow({
			model: project,
			velocity: velocity
		});
		velocity.fetch();
		this._swapView(projectShowView);
		$('nav a.link-to-home').text(project.get('title'));
	},

	_swapView: function (view) {
		if (typeof this.currentView !== 'undefined') {
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	},
});