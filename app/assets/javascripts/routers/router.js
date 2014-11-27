'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
AwesomeTracker.Routers.Router = Backbone.Router.extend({
	initialize: function (option) {
		this.$rootEl = option.$rootEl;
		this.projects = option.projects;
	},

	routes: {

		'/project/:id': 'projectShow',
		'': 'index'
	},

	index: function () {
		var indexView = new AwesomeTracker.Views.ProjectIndex({
			collection: this.projects,
		});
		this.projects.fetch();
		this._swapView(indexView);
	},

	projectShow: function (id) {
		debugger
		var project = this.projects.getOrFetch(id);
		var projectShow = new AwesomeTracker.Views.ProjectShow({
			model: project
		});
		this._swapView(projectShow);
	},

	_swapView: function (view) {
		if (typeof this.currentView !== 'undefined') {
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	},
});