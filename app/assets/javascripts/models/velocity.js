'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
AwesomeTracker.Models.Velocity = Backbone.Model.extend({
	urlRoot: '/api/velocity'
});