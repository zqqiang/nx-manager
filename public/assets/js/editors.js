(function(app) {
	app.editorsView = Backbone.Marionette.ItemView.extend({
		template: "#editors-template",
		initialize: function() {
			var EditorsModel = Backbone.Model.extend({});

			this.model = new EditorsModel({
				id: _.uniqueId('default-editor-'),
				type: "text",
				label: "Default Text",
				placeholder: "Default Text Editor",
			});

			this.model.fetch({
				url: "Editors",
				success: function(res) {},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("status: [%s]", textStatus.status);
					console.log("statusText: [%s]", textStatus.statusText);
				}
			});

		}
	});
})(Application);