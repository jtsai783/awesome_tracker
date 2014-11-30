'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.StoryIndexItem = Backbone.View.extend({
	template: JST.story_index_item,

	render: function () {
		var content = this.template({
			story: this.model
		});
		this.$el.html(content);
		return this;
	}
});