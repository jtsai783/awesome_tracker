'use strict';
var AwesomeTracker = window.AwesomeTracker;
var $ = window.$;
var Backbone = window.Backbone;
window.AwesomeTracker = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new AwesomeTracker.Routers.Router({
  		$rootEl: $('.wrapper-whole-page'),
  		projects: AwesomeTracker.projects 
  	});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  AwesomeTracker.initialize();
});
