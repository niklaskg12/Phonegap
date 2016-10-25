define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!templates/condition.html',
	'views/condition',
	'jqueryTmpl'
], function ($, _, Backbone, Handlebars, conditionTemplate, ConditionView) {
	var ConditionsView = Backbone.View.extend({
	
		el: $('#result'),
		tagName: "li",
		template:Handlebars.compile($("#tmplt_condition_item").html()),
		initialize: function () {
			console.log("Initialized conditions view");
		},
		
		render: function () {
			var view = this,
				data = this.model,
				fragment = document.createDocumentFragment();
			$(this.el).html("");
			for (var k in data){
				item = data[k];
				item.item_id = k				
				if (item.display_name) {					
					$(this.el).append(this.template(item)) ;
				}
			}
			/*$(data).each(function (index, item) {
				console.log(index);
				if (item.display_name) {
					console.log(item.display_name);
					var conditionView = new ConditionView({model: item});
					fragment.appendChild(conditionView.render().el.get(0));
				}
			});
			*/
			//console.log(fragment);
			//this.el.append(fragment.cloneNode(true));
			
			return this;
		}
		
	});
	
	return ConditionsView;
	
});
