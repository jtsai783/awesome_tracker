'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
var $ = window.$;
AwesomeTracker.Views.StoryIndexItem = Backbone.View.extend({
	template: JST.story_index_item,

	events: {
		'click button.assign-points': 'assignPoints'
	},

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
	},

	assignPoints: function (event) {
		// var storyId = this.model.get('id');
		var points = parseInt($(event.currentTarget).text());
		this.model.save({
			points: points
		});
	},

	render: function () {
		var content = this.template({
			story: this.model
		});
		this.$el.attr('data-id', this.model.get('id'));
		this.$el.addClass('story-index-item');
		this.$el.html(content);
		return this;
	}
});