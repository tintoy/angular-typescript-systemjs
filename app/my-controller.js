export class MyController {
    constructor($scope) {
        $scope.greeting = "Hello from TypeScript and SystemJS :-)";
    }
}
MyController.$inject = ["$scope"];
