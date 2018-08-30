angular.module('app.web',[]).config(function($stateProvider){
    $stateProvider.state({
        name: 'web',
        url: '/web',
        templateUrl: 'app/web/index.html',
        controller: 'WebController'
    });
});
