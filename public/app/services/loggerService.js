(function() {

    angular.module('app')
        .service('logger', Logger);


    function Logger() {

        this.name = 'trace logger';

    }

    Logger.prototype.output = function(message) {
        console.log(this.name + ' - ' + message);
    }

}());