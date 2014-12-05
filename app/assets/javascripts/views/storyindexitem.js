'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
var JST = window.JST;
var $ = window.$;
AwesomeTracker.Views.StoryIndexItem = Backbone.View.extend({
	template: JST.story_index_item,

	events: {
		'click button.assign-points': 'assignPoints',
		'click .glyphicon-remove': 'deleteStory',
		// 'click': 'open'
	},

	open: function () {
		if (this.$el.hasClass('open-detail')) {
			this.$el.removeClass('open-detail');
			this.$el.find('.expanded-story-index-item').removeClass('show-hidden');
		} else {
			this.$el.addClass('open-detail');
			this.$el.find('.expanded-story-index-item').addClass('show-hidden');
		}
	},

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
	},

	assignPoints: function (event) {
		var points = parseInt($(event.currentTarget).text());
		this.model.save({
			points: points
		});
	},

	deleteStory: function (event) {
		this.model.destroy({
			success: function () {
				this.remove();
			}.bind(this)
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