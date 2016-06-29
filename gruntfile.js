module.exports = function(grunt) {
  grunt.initConfig ({

    /**
     * Import project information
     */
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Project details
     */
    project: {
      public: '/app/',
      js: [
        '<%= project.public %>js/*.js'
      ]
    },

    /**
     * Linting
     */
    jshint: {
      files: {
        src: [
          'app/src/*.js',
          'app/src/native/**/*.js'
        ]
      }
    },

    /**
     * Watch task
     */
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: [
          'app/src/*.js',
          'app/src/native/**/*.js'
        ],
        options: {
          spawn: false
        },
        tasks: ['jshint']
      },
      html: {
        files: [
          '**/*.html'
        ],
        options: {
          spawn: false
        }
      }
    }
  });

  /**
   * Load grunt plugins
   */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'watch'
  ]);

  /**
   * Testing task
   */
  grunt.registerTask('lint', [
    'jshint'
  ]);
};
