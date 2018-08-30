angular
.module('app', ['ui.router', 'ui.grid', 'ui-notification','app.web'])
.config(function($urlRouterProvider, NotificationProvider){
    $urlRouterProvider.otherwise('/web');

    NotificationProvider.setOptions({
        delay: 2000,
        startTop: 50,
        startRight: 40,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'top'
    });
});
