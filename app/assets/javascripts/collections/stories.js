'use strict';
var AwesomeTracker = window.AwesomeTracker;
var Backbone = window.Backbone;
AwesomeTracker.Collections.Stories = Backbone.Collection.extend({
	model: AwesomeTracker.Models.Story,
	url: 'api/stories',
	comparator: function (story) {
		// if (story1.get('order') > story2.get('order')) {
		// 	return -1;
		// }

		// if (story1.get('order') < story2.get('order')) {
		// 	return 1;
		// }

		// if (story1.get('order') === story2.get('order')) {
		// 	return 0;
		// }
		return story.get('order');
	}
});