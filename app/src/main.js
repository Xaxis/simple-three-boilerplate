/**
 * Main application initialization module.
 */
define([
  'scene'
], function(
  Scene
) {
  var Main = function() {
    return {

      /**
       * Initialize modules.
       */
      initialize: function() {
        Scene.initialize();
      }
    };
  };

  return Main;
});
