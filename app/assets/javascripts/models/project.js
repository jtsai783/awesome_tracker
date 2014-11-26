'use strict';
var Backbone = window.Backbone;
var AwesomeTracker = window.AwesomeTracker;
AwesomeTracker.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects'
});