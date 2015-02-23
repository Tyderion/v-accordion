

// vPaneContent directive
/**
 * @ngdoc directive
 * @restrict E
 * @module vAccordion.directives
 * @name vPaneContent
 */
angular.module('vAccordion.directives')
  .directive('vPaneContent', vPaneContentDirective);


function vPaneContentDirective () {
  return {
    restrict: 'E',
    require: '^vPane',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {},
    link: function (scope, iElement, iAttrs) {
      iAttrs.$set('role', 'tabpanel');
    }
  };
}

