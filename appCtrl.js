app.controller('myCtrl', function($scope, user){
    $scope.menu = ["information","symptom","disease","detail"];     
});

app.controller('infoCtrl', function($scope, user){
    $scope.age = ["0-2 Years","3-10 Years","11-18 Years", "19-24 Years", "25-34 Years", "35-50 Years","51-60 Years","60+ Years"];
    $scope.user = user;
    // console.log(user);
    $scope.gender = $scope.user.gender;
    $scope.selectedAge = $scope.user.selectedAge;
    $scope.next = function(){
        user.gender = $scope.gender;
        user.selectedAge = $scope.selectedAge;
        // console.log(user);          
    }

});

app.controller('symptomCtrl', function($scope, user){
    $scope.user = user;
    $scope.symptoms = ["FEVER","HEADACHE","JOINT ACHE"];
    $scope.selectedAge = $scope.user.selectedAge;
    $scope.gender = $scope.user.gender;
    // console.log(user);
    $scope.next = function(){
        user.symptom = $scope.symptom;
        console.log(user);
    }
});

app.controller('diseaseCtrl', function($scope, user){
    $scope.user = user;
    $scope.symptom = $scope.user.symptom;
    switch ($scope.symptom) {
        case "FEVER":
            $scope.diseases = [
                { id:"1", name : "acute sinusitis", per : "93"},
                { id:"2", name : "Viral Pharyngitis", per : "90"}
            ];  
        break;
        case "HEADACHE":
            $scope.diseases = [
                { id:"3", name : "Gastroenteritis", per : "90"},
                { id:"4", name : "Influenza", per : "87"}
            ];
        break;
        case "JOINT ACHE":
            $scope.diseases = [
                { id:"5", name : "Bacterial pneumonia", per : "92"},
                { id:"6", name : "Medication side effect", per : "85"}
            ];        
    }
    
});

app.controller('detailCtrl', function($scope, $routeParams, user){
    $scope.param = $routeParams.id;
    console.log($scope.param);
    $scope.diseases = [
        { id:"1", name : "acute sinusitis", per : "93", symptoms : ["Fever", "Headache", "Cough"]},
        { id:"2", name : "Viral Pharyngitis", per : "90" , symptoms : ["Fever", "Headache", "Cough", "Vomitting"]},
        { id:"3", name : "Gastroenteritis", per : "90" , symptoms : ["Stomachache", "Cough"]},
        { id:"4", name : "Influenza", per : "87" , symptoms : ["Fever", "Headache"]},
        { id:"5", name : "Bacterial pneumonia", per : "92" , symptoms : ["Fever", "Headache", "Cough"]},
        { id:"6", name : "Medication side effect", per : "85" , symptoms : ["Fever", "Headache", "Cough", "Loose Motion"]}
    ];

    $scope.disease = $scope.diseases[$scope.param - 1];
});