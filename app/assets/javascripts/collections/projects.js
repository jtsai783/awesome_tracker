'use strict';
var Backbone = window.Backbone;
var AwesomeTracker = window.AwesomeTracker;
AwesomeTracker.Collections.Projects = Backbone.Collection.extend({
	model: AwesomeTracker.Models.Project,
	url: '/api/projects',
	getOrFetch: function (id) {
		var project = this.get(id);
		var collection = this;
		if (typeof project === 'undefined') {
			project = new AwesomeTracker.Models.Project({id: id});
			project.fetch({
				success: function () {
					collection.add(project);
				}
			});
			return project;
		} else {
			project.fetch();
			return project;
		}
	}
});

AwesomeTracker.projects = new AwesomeTracker.Collections.Projects();