define([
	'underscore',
	'backbone',
	'handlebars',
	'models/condition',
	'text!templates/condition.html',
	'jqueryTmpl'
], function (_, Backbone, Handlebars, ConditiontModel, conditionTemplate) {
	
	var ConditionView = Backbone.View.extend({
		el: $('#result'),
		template: Handlebars.compile( $("#tmplt_condition_detail").html() ),
		initialize: function () {
			console.log("initialized condition view");
		},
		
		render: function () {			
			$(this.el).html(this.template(this.model)) ;
			return this;
		}
		
	});
	
	return ConditionView;
	
});
