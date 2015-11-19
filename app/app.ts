// The generated JS looks like ES6 because it is; SystemJS then transpiles it on-the-fly.
// For production builds, use the SystemJS Builder to bundle everything up in a single script at build time.

// We need Angular.
import * as angular
	from "angular";

// Register main application module.
const myApp = angular.module("MyApp", []);

// Register controller(s)
import {MyController, AnotherController}
	from "./my-controller";
myApp
	.controller("MyController", MyController)
	.controller("AnotherController", AnotherController);

// Ok, we're ready to start our Angular app.
angular.bootstrap(document, ["MyApp"]);
