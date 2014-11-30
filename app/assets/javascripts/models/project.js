'use strict';
var Backbone = window.Backbone;
var AwesomeTracker = window.AwesomeTracker;
AwesomeTracker.Models.Project = Backbone.Model.extend({
	urlRoot: '/api/projects',

	stories: function () {
		if (typeof this._stories === 'undefined') {
			this._stories = new AwesomeTracker.Collections.Stories();
			return this._stories;
		} else {
			return this._stories;
		}
	},

	parse: function (response) {
		if (typeof response.stories !== 'undefined') {
			this.stories().set(response.stories, {parse: true});
			delete response.stories;
		}
		return response;
	}
});