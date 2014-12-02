'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
var $ = window.$;
var _ = window._;
AwesomeTracker.Views.ProjectShow = Backbone.CompositeView.extend({
	template: JST.project_show,

	events: {
		'sortstop': 'saveOrds',
		'click button.new-story': 'newStory'
	},

	initialize: function () {
		this.collection = this.model.stories();
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addStoryIndexItem);
	},

	newStory: function () {
		var title = $('.story-title').val();
		var projectId = this.model.get('id');
		var newStory = new AwesomeTracker.Models.Story({
			title: title,
			project_id: projectId,
		});
		var collection = this.collection;
		newStory.save({}, {
			success: function (story) {
				collection.add(story);
			}
		});
		$('.story-title').val('');
	},

	saveOrds: function (event, ui) {
		var storyId = ui.item.data('id');
		var listType = ui.item.parent().data('list');
		var story = new AwesomeTracker.Models.Story({
			id: storyId
		});
		story.save({
			list: listType
		});
		var listSelector = '#list-' + listType;
		var sortArr = $(listSelector).sortable('toArray', {attribute: 'data-id'});
		var order = 1;
		_(sortArr).each(function (storyId) {
			story = new AwesomeTracker.Models.Story({id: storyId});
			story.save({
				order: order
			});
			order = order + 1;
		});
	},

	addStoryIndexItem: function (story) {
		var newStoryIndexItemView = new AwesomeTracker.Views.StoryIndexItem({
			model: story
		});
		if (story.get('list') === 'current') {
			this.addSubview('#list-current', newStoryIndexItemView);
		} else if (story.get('list') === 'backlog') {
			this.addSubview('#list-backlog', newStoryIndexItemView);
		} else if (story.get('list') === 'icebox') {
			this.addSubview('#list-icebox', newStoryIndexItemView);
		}	else if (story.get('list') === 'done') {
			this.addSubview('#list-done', newStoryIndexItemView);
		}		
	},

	render: function () {
		var content = this.template({
			project: this.model
		});
		this.$el.html(content);
		this.attachSubviews();
		$('#list-current, #list-backlog, #list-icebox, #list-done').sortable({
			connectWith: '.connectedList'
		});
		return this;
	}
});