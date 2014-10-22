(function() {

    var app = angular.module('app', []);

    app.provider('books', function () {

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };

        this.$get = function () {

            var appName = 'Book Logger';
            var version = '1.0';

            if (includeVersionInTitle) {
                appName += ' ' + version;
            }

            var appDesc = 'Track which books you read.';

            return {
                appName: appName,
                appDesc: appDesc
            };
        }

    });

    app.config(function (booksProvider) {

        booksProvider.setIncludeVersionInTitle(true);

    });

}());