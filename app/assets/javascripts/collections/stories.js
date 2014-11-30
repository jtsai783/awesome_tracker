'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
AwesomeTracker.Collections.Stories = Backbone.Collection.extend({
	model: AwesomeTracker.Models.Story,
	url: 'api/stories'
});