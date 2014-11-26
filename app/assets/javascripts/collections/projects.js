'use strict';
var Backbone = window.Backbone;
var AwesomeTracker = window.AwesomeTracker;
AwesomeTracker.Collections.Projects = Backbone.Collection.extend({
	model: AwesomeTracker.Models.Project,
	url: '/api/projects'
});