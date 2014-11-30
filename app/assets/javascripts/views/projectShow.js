'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
AwesomeTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST.project_show,

	initialize: function () {
		this.collection = this.model.stories();
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addStoryIndexItem);
	},

	addStoryIndexItem: function (story) {
		var newStoryIndexItemView = new AwesomeTracker.Views.StoryIndexItem({
			model: story
		});
		this.addSubview('.story-index', newStoryIndexItemView);
	},

	render: function () {
		var content = this.template({
			project: this.model
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});