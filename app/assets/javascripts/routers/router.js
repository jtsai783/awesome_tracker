'use strict';
var AwesomeTracker = window.AwesomeTracker;
var $ = window.$;
var Backbone = window.Backbone;
AwesomeTracker.Routers.Router = Backbone.Router.extend({
	initialize: function (option) {
		this.$rootEl = option.$rootEl;
		this.$projectEl = this.$rootEl.find('.project-container');
		this.projects = option.projects;
	},

	routes: {
		'': 'index'
	},

	index: function () {
		var indexView = new AwesomeTracker.Views.ProjectIndex({
			collection: this.projects,
		});
		this.projects.fetch();
		this._swapProjectView(indexView);
	},

	_swapProjectView: function (view) {
		if (typeof this.currentProjectView !== 'undefined') {
			this.currentProjectView.remove();
		}
		this.currentProjectView = view;
		this.$projectEl.html(view.render().$el);
	}
});