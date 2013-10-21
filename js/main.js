/**
 * Created by david on 10/20/13.
 */
var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
  "use strict";
  return { message: "I'm data from a service"}
})

// the method name matches the controller name in index.html
function FirstCtrl($scope, Data){
  "use strict";
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  "use strict";
  $scope.data = Data;
}