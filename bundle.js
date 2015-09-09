var Builder = require("systemjs-builder");
var builder = new Builder();

builder.loadConfig("./config.js")
		.then(
			function() {
				builder.build("app/app", "./build/app.js");
			},
			function(error) {
				console.log(error.message);
			}
		);
