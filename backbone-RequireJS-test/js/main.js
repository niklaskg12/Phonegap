// configure paths
require.config({
	paths: {
		jquery: 'libs/jquery',
		jqueryTmpl: 'libs/jquery.tmpl',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone',
		handlebars: 'libs/Handlebars',
		text: 'libs/text'
	},
	shim: {
	    underscore: {
	      exports: '_'
	    },
	    backbone: {
	      deps: ["underscore", "jquery"],
	      exports: "Backbone"
	    }, 
		handlebars: {
            exports: 'Handlebars'
        }
	  }
});

require([
	'jquery',
	'underscore',
	'backbone',
	'router',
], function ($, _, Backbone, AppRouter) {
	/*
	 * app running
	 */
	var appRouter = new AppRouter;
	Backbone.history.start();

	
});
