define(
	[
		'backbone', 'app', 'views/menu', 'views/navbar', 'views/layout'
	],
	function(Backbone, app, Menu, Navbar, Layout) {
		var Router = Backbone.Router.extend({
			routes: {
				"": "showIndex",
				"Login": "showLogin",
				"Editors": "showEditors",
				"Table": "showTable",
				"Dianping": "showDianping",
				"HighCharts": "showHighCharts",
				"3d": "show3d",
				"*other": "defaultRouter",
			},
			showIndex: function() {
				app.navigateTo("");
			},
			showEditors: function() {
				app.navigateTo("Editors");
			},
			showTable: function() {
				app.navigateTo("Table");
			},
			showDianping: function() {
				app.navigateTo("Dianping");
			},
			showHighCharts: function() {
				app.navigateTo("HighCharts");
			},
			show3d: function() {
				app.navigateTo("3d");
			},
			showLogin: function() {
				app.navigateTo("Login");
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);