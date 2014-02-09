module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
          dev: {
            options: {
              port: 9000,
              livereload: true,
              base: 'development',
              open: 'http://localhost:9000'
            }
          }
        },

        browserify: {
            options: {
                transform: ['reactify'],
                aliasMappings: [
                    {src: "./src/jsx/common/**/*.jsx", dest: "common"}
                ]
            },
            dev: {
                options: {
                    debug: true
                },
                files: {
                    'development/js/<%= pkg.name %>.js': ['src/index.jsx']
                }
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.js': ['src/index.jsx']
                }
            }
        },

        stylus: {
            dev: {
                options: {
                    compress: false
                },
                files: {
                    'development/css/<%= pkg.name %>.css': ['src/stylus/application.styl']
                }
            },
            dist: {
                options: {
                },
                files: {
                    'dist/css/<%= pkg.name %>.css': ['src/stylus/application.styl']
                }
            }
        },

        // @TODO: Find a cleaner way to do this given the target path
        copy: {
            dev: {
                files: [
                    {src: ['bower_components/director/build/director.min.js'], dest: './development/js/vendor/director.min.js'},
                    {src: ['bower_components/react/react-with-addons.js'], dest: './development/js/vendor/react.min.js'},
                    {src: ['bower_components/normalize-css/normalize.css'], dest: './development/css/vendor/normalize.css'},
                    {src: ['lib/codemirror-compressed.js'], dest: './development/js/vendor/codemirror.js'},
                    {src: ['lib/codemirror.css'], dest: './development/css/vendor/codemirror.css'},
                    {src: ['lib/foundation.css'], dest: './development/css/vendor/foundation.css'}
                ]
            },
            dist: {
                files: [
                    {src: ['bower_components/director/build/director.min.js'], dest: './dist/js/vendor/director.min.js'},
                    {src: ['bower_components/react/react-with-addons.min.js'], dest: './dist/js/vendor/react.min.js'},
                    {src: ['bower_components/normalize-css/normalize.css'], dest: './dist/css/vendor/normalize.css'},
                    {src: ['lib/codemirror-compressed.js'], dest: './dist/js/vendor/codemirror.js'},
                    {src: ['lib/codemirror.css'], dest: './dist/css/vendor/codemirror.css'},
                    {src: ['lib/foundation.min.css'], dest: './development/css/vendor/foundation.css'}
                ]
            }
        },

        // for dist we use a .min.* for lets repalce some placeholders in the
        // index.html template
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'pkg_name',
                            replacement: '<%= pkg.name %>'
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['src/index.html'], dest: './development'}
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'pkg_name',
                            replacement: '<%= pkg.name %>.min'
                        }
                    ]
                },
                files: [
                    {expand: true, flatten: true, src: ['src/index.html'], dest: './dist'}
                ]
            }
        },

        clean: {
            dev: ["development"],
            dist: ["dist"]
        },

        cssmin: {
            dev: {
                add_banner: {
                    options: {
                        banner: '/*!\n <%= asciify_appname %> \n*/\n'
                    },
                    files: {
                        'development/css/<%= pkg.name %>.min.css': ['development/css/<%= pkg.name %>.css']
                    }
                }
            },
            dist: {
                options: {
                    banner: '/*!\n <%= asciify_appname %> \n*/\n'
                },
                files: {
                    'dist/css/<%= pkg.name %>.min.css': ['dist/css/<%= pkg.name %>.css']
                }
            }
        },

        asciify: {
            // fonts; http://www.figlet.org/examples.html
            appname: {
                text: 'React Edit'
            },
            options:{
                font:'puffy',
                log: false
            }
        },

        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*!\n <%= asciify_appname %> \n*/\n'
            },
            dist: {
                files: {
                  'dist/js/<%= pkg.name %>.min.js': ['dist/js/<%= pkg.name %>.js'],
                }
            }
        },

        watch: {
            options: {
              livereload: true,
            },
            files: [ "src/**/*.jsx", "src/**/*.js", 'src/**/*.styl', 'src/*.html'],
            tasks: [ 'devBuild' ]
        },

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('devBuild', [
    'clean:dev',
    'copy:dev',
    'replace:dev',
    'browserify:dev',
    'asciify',
    'stylus:dev',
    'cssmin:dev',
  ]);

  grunt.registerTask('dev', [
    'devBuild',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('dist', [
    'clean:dist',
    'copy:dist',
    'replace:dist',
    'browserify:dist',
    'asciify',
    'stylus:dist',
    'cssmin:dist',
    'uglify:dist'
  ]);

  grunt.registerTask('default', [
    'dev'
    ]);
};
