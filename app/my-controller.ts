import * as angular from "angular";

/** The scope for my Angular controller. */
export interface MyControllerScope extends angular.IScope {
	/** A greeting to display */
	greeting: string;
}

/** My Angular controller. */
export class MyController {
	/** Dependencies to inject */
	static $inject = ["$scope"];

	/**
	 * Create a new instance of MyController.
	 * @param $scope {MyControllerScope} The controller scope
	 */
	constructor($scope : MyControllerScope) {
		$scope.greeting = "Hello from TypeScript and SystemJS :-)";
	}
}

/**
 * Another Angular controller.
 * Uses the same scope as MyController.
 */
export class AnotherController {
	/** Dependencies to inject. */
	static $inject = ["$scope"];
	
	/**
	 * Create a new instance of AnotherController.
	 * @param $scope {MyControllerScope} The controller scope.
	 */
	constructor($scope: MyControllerScope) {
		$scope.greeting = "Hello again from TypeScript and SystemJS :-D";
	}
}
