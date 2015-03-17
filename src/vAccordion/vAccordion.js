// Config
angular.module('vAccordion.config', [])
  .constant('accordionConfig', {
    states: {
      expanded: 'is-expanded',
      collapsed: 'is-collapsed'
    }
  });


// Modules
angular.module('vAccordion.directives', []);
angular.module('vAccordion',
  [
    'vAccordion.config',
    'vAccordion.directives'
  ]);

