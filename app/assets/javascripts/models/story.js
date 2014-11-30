'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
AwesomeTracker.Models.Story = Backbone.Model.extend({
	urlRoot: '/api/stories'
});