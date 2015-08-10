angular.module('myApp', [])
    .controller('MultiplicationCtrl', function($scope) {
    
    //Number of rows/columns on the table
        $scope.tableLimit = 10;
        $scope.numbers = function ()
        {
            var numArray = [];
            //set a static limit of 100 rows and columns to keep user from trying large numbers
            for (var i = 1; i <= 100; i++)
            {
             numArray.push(i); 
            }
            
            if ($scope.tableLimit > 0)
            { 
                return numArray.slice(0, $scope.tableLimit);        
            }
            else
            {
                return defaultNo;
            }
        };
        $scope.compute = function (a, b)
        {
         return a * b;   
        };
    });