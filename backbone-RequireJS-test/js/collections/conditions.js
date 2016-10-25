define([
	'underscore',
	'backbone',
	'models/condition',
	'views/condition'
], function (_, Backbone, ConditionModel, ConditionView) {
	var Conditions = Backbone.Collection.extend({
		
		model: ConditionModel,
		
		initialize: function () {
			console.log("Initialized conditions collection");
		}
		
	});
	
	return Conditions;
	
});
