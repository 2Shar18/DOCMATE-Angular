var app = angular.module('myApp', ["ngRoute"]);
app.factory("user",function(){
    return {
        gender: "male",
        selectedAge: "0-2 Years"
    };
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "information.html",
        controller : "infoCtrl"
    })
    .when("/information", {
        templateUrl : "information.html",
        controller : "infoCtrl"
    })
    .when("/symptom", {
        templateUrl : "symptom.html",
        controller : "symptomCtrl"
    })
    .when("/disease", {
        templateUrl : "disease.html",
        controller : "diseaseCtrl"
    })
    .when("/detail/:id", {
        templateUrl : "detail.html",
        controller : "detailCtrl"
    });
});

app.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
        console.log('Current route name: ' + $location.path());
        $rootScope.selectedAge = $rootScope.selectedAge;
        $rootScope.url = $location.path().substring(1);
        console.log($rootScope.url);
        switch ($rootScope.url){
            case "":
                $rootScope.in = 0;
            break;
            case "information":
                $rootScope.in = 0;
            break;
            case "symptom":
                $rootScope.in = 1;
            break;
            case "disease":
                $rootScope.in = 2;
            break;
            default:
                $rootScope.in = 3;
            break;
        }
    });
}]);
