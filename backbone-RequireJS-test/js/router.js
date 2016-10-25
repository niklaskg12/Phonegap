define([
	'jquery',
	'underscore',
	'backbone',
	'models/condition',
	'views/conditions',
	'views/condition'
], function ($, _, Backbone, ConditiontModel, ConditionsView, ConditionView) {
	
	var AppRouter = Backbone.Router.extend({

		routes: {
			'condition/:id': 'conditionDeatail',		// searching
			'*other': 'defaultRoute'
		},
		
		defaultRoute: function () {
			var model = new ConditiontModel();
			var conditions = model.data.treatments
			var conditionsView = new ConditionsView({model: conditions});
			conditionsView.render();
		},
		
		conditionDeatail: function (id) {
			var model = new ConditiontModel();
			var condition_item = model.data.treatments[id]
			var conditionView = new ConditionView({model: condition_item});
			conditionView.render();
		},
		
		
	});
	
	return AppRouter;
	
});
