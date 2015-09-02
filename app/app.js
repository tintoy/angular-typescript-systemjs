import * as angular from "angular";
import { MyController } from "./my-controller";
angular.module("MyApp", [])
    .controller("MyController", MyController);
angular.bootstrap(document, [
    "MyApp"
]);
