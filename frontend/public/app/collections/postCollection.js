
define(function(require){
	var Backbone = require('lib/backbone');
	var Model = require('models/postModel');

	var PostCollection = Backbone.Collection.extend({
		model: Model,
		initialize: function(models){
			if(models){
				var len = models.length;
				for(var i=0; i < len; i++){
					this.add(models[i]);
				}
			}
			return;
		}
	});
	return PostCollection
})