angular.module('app.web').controller('WebController', function($scope, $http){

    // $scope.artist = "Odesza";

    function loadEvents()
    {
        console.log($scope.artist);
        var url = "https://ws.audioscrobbler.com/2.0/?";
        var query_string = {
            'params': {
                'method': 'artist.gettoptracks',
                'artist': $scope.artist,
                'limit': '8',
                'api_key': '69d8e74e88cf78a924e55e1223762b82',
                'format': 'json'
            }
        };

        $http.get(url, query_string).then(function(response) {
            console.log(response.data.toptracks.track);
            $scope.songs = response.data.toptracks.track;
        });
    }

    $scope.search = function()
    {
        loadEvents();
    }

    //on page load:
    // loadEvents();

});
