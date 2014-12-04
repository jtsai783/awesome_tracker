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
		'click button.new-story': 'newStory',
	},

	initialize: function (options) {
		this.velocity = options.velocity;
		this.newVelocityView = new AwesomeTracker.Views.AverageVelocity({
			model: this.velocity
		});
		this.addSubview('.average-velocity', this.newVelocityView);
		this.collection = this.model.stories();
		this.collection.each(this.addStoryIndexItem.bind(this));
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.velocity, 'sync', this.newVelocityView.render.bind(this.newVelocityView));
		this.listenTo(this.collection, 'add', this.addStoryIndexItem);
		this.listenTo(this.collection, 'remove', this.removeStoryIndexItem);
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
		var story = this.collection.get(storyId);
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
		this.velocity.fetch();
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

	removeStoryIndexItem: function (story) {
		var selector;
		if (story.get('list') === 'current') {
			selector = '#list-current';
		} else if (story.get('list') === 'backlog') {
			selector = '#list-backlog';
		} else if (story.get('list') === 'icebox') {
			selector = '#list-icebox';
		}	else if (story.get('list') === 'done') {
			selector = '#list-done';
		}		
		var subview = _.find(this.subviews(selector), function (subview) {
			if (subview.model.get('id') === story.get('id')) {
				return true;
			}
			return false;
		});
		this.removeSubview(selector, subview);
	},

	render: function () {
		var content = this.template({
			project: this.model
		});
		$('nav a.link-to-home').text(this.model.get('title'));
		this.$el.addClass('project-show');
		this.$el.html(content);
		this.attachSubviews();
		$('#list-current, #list-backlog, #list-icebox, #list-done').sortable({
			connectWith: '.connectedList'
		});
		return this;
	}
});