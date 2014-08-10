module.exports = function( grunt ) {

    // Require all tasks
    require('load-grunt-tasks')( grunt );

    // Initialize Configuration
    grunt.initConfig({
        file: grunt.file.readJSON('package.json'),
        uglify: {
            all: {
                files: {
                    'dist/jquery.scrolltotop.min.js': ['src/jquery.scrolltotop.js']
                },
                options: {
                    banner: '/*! scrolltotop.js v<%= file.version %> | ' +
                        '(c) 2014, <%= grunt.template.today("yyyy") %> Andy Santana | ' +
                        'https://github.com/AndySantana/scrolltotop.js/README.md */',
                }
            }
        }
    });

    // Default task ( all task load )
    grunt.registerTask('default','Task to build plugin, verify sintax and compress', ['uglify']);
};