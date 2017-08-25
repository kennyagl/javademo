angular.module('pokemoApp.pokemonControllers', [])

        
        .controller('searchController', function ($scope, $log, $http) {

            $scope.searchPokemon = function () {
                $scope.searchResult = {};

                
                var url = "http://pokeapi.co/api/v2/pokemon/" + $scope.name;


                $http({method: 'GET',
                    url: url})
                        .then(function success(response) {
                            $scope.searchResult = response.data;
                            $log.info("searchResult" + response.data);

                        }, function error(response) {
                            $log.warn("No results for search: " + $scope.name);
                        });

            }
            
           

        });
