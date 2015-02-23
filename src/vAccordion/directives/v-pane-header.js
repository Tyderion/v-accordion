

// vPaneHeader directive
/**
 * @ngdoc directive
 * @restrict E
 * @module vAccordion.directives
 * @name vPaneHeader
 */
angular.module('vAccordion.directives')
  .directive('vPaneHeader', vPaneHeaderDirective);


function vPaneHeaderDirective () {
  return {
    restrict: 'E',
    require: '^vPane',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {},
    link: function (scope, iElement, iAttrs, paneCtrl) {
      iAttrs.$set('role', 'tab');

      iElement.on('click', function (e) {
        if (!e.target.classList.contains('v-accordion-header-ignore-click')) {
          scope.$apply(function() {
            paneCtrl.toggle();
          });
        }
      });
    }
  };
}

