import * as angular from "angular";

export interface MyControllerScope extends angular.IScope {
	greeting: string;
}

export class MyController {
	static $inject = ["$scope"];

	constructor($scope : MyControllerScope) {
		$scope.greeting = "Hello from TypeScript and SystemJS :-)";
	}
}
