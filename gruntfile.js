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
     * Set project banner
     */
    tag: {
      banner: '/*!\n' +
      ' * <%= pkg.name %>\n' +
      ' * <%= pkg.title %>\n' +
      ' * @author <%= pkg.author %>\n' +
      ' * @version <%= pkg.version %>\n' +
      ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
      ' */\n'
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
