/**
 * Created by siyengar on 2/8/15.
 */
'use strict';

angular.module('ngreflect', []);
angular.module('restore', ['ui.router', 'ui.bootstrap']).requires.push('ngreflect');
angular.element(document).ready(function () {
    angular.bootstrap(angular.element('#ang_div'), ['restore']);
});

