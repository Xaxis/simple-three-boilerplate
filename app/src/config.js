/**
 * Require.js configuration
 */
(function(window, require) {

  /**
   * Require.js configuration object
   */
  var RequireConfig = {
    baseUrl: 'src',
    paths: {

      // Vendor dependencies
      'lodash':                       'vendor/lodash/lodash.min',
      'tween':                        'vendor/tween.js/src/Tween',
      'three':                        'vendor/three/build/three.min',
      'three.orbitcontrols':          'vendor/three/examples/js/controls/OrbitControls',
      'three.trackballcontrols':      'vendor/three/examples/js/controls/TrackballControls',

      // Application modules
      'scene':                        'native/scene/scene'
    },
    shim: {
      'three.orbitcontrols': {
        deps: ['three']
      },
      'three.trackballcontrols': {
        deps: ['three']
      }
    }
  };

  // Bootstrap app
  require.config(RequireConfig);
  require(['main'], function(Main) {
    var app = new Main();
    app.initialize();
  });
})(window, require);
