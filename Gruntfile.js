module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var pkg = grunt.file.readJSON('package.json');

    /**
     * Major Version and Version Number
     *
     * @description
     * Increase the version number to the desired version for css and javascript
     * files. This will also create a version directory in the /cdn folder in the structure
     * of /cdn/<major_version/<version>/ that contains the javascript and css.
     */
    var major_version = "2";
    var version = "2.0.1b";

    grunt.initConfig({
        pkg: pkg,
        version: version,
        major_version: major_version,
        shell: {
            patternlab: {
                options: {
                    failOnError: false,
                    execOptions: {
                        maxBuffer: 1024 * 1024 * 64
                            // maxBuffer: Infinity
                    },
                },
                command: "php core/builder.php -g",
            },
            go: {
                // command: "php -S localhost:4000 -t public"
            }
        },

        mkdir: {
            prod: {
                options: {
                    mode: 0777,
                    create: ['cdn/<%= major_version %>/<%= version %>/css', 'cdn/<%= major_version %>/<%= version %>/js', 'cdn/<%= major_version %>/<%= version %>/images']
                }
            }
        },

        sass: {
            options: {
                imagePath: 'source/images',
                precision: 5,
                includePaths: require('node-bourbon').includePaths
            },
            sg: {
                options: {
                    outputStyle: 'nested',
                    sourceMap: true,
                },
                files: {
                    'public/styleguide/css/styleguide.css': 'core/styleguide/css/styleguide.scss',
                    'public/styleguide/css/styleguide-specific.css': 'core/styleguide/css/styleguide-specific.scss',
                    'public/styleguide/css/styleguide-custom.css': 'core/styleguide/css/styleguide-custom.scss'
                }
            },
            dev: {
                options: {
                    outputStyle: 'nested',
                    sourceMap: true,
                },
                files: {
                    'public/css/dev.css': 'source/css/dev.scss'
                }
            },
            prod: {
                options: {
                    outputStyle: 'compressed',
                    sourceMap: false,
                },
                files: {
                    'cdn/<%= major_version %>/<%= version %>/css/main.css': 'source/css/main.scss',
                }
            }
        },

        jsHeadFiles: [
            // Include:
            'source/js/head-scripts.js'
        ],

        jsFootFiles: [
            // Include:
            'source/js/plugins.js',
            'source/js/modaal.js',
            'source/js/slick.js',
            'source/js/script.js'
        ],

        uglify: {
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false
                },
                files: {
                    'public/js/head-script.min.js': ['<%= jsHeadFiles %>'],
                    'public/js/script.min.js': ['<%= jsFootFiles %>']
                }
            },
            prod: {
                options: {
                    beautify: false,
                    mangle: true,
                    compress: true
                },
                files: {
                    'cdn/<%= major_version %>/<%= version %>/js/head-script.min.js': ['<%= jsHeadFiles %>'],
                    'cdn/<%= major_version %>/<%= version %>/js/script.min.js': ['<%= jsFootFiles %>']
                }
            }
        },

        imagemin: { // Task
            dynamic: { // Another target
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'source/images/', // cwd is 'current working directory' - Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'public/images/' // Destination path prefix
                }]
            }
        },

        copyFiles: '**/*.{eot,svg,ttf,woff,pdf}',

        copy: {
            target: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: 'source/',
                        src: ['<%= copyFiles %>'],
                        dest: 'public/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'source/',
                        src: ['<%= copyFiles %>'],
                        dest: 'cdn/<%= major_version %>/<%= version %>/'
                    }
                ]
            }
        },

        // Symlink creates a cdn/latest
        symlink: {
          expanded: {
            files: [
              // All child directories in "source" will be symlinked into the "build"
              // directory, with the leading "source" stripped off.
              {
                src: ['cdn/<%= major_version %>/<%= version %>'],
                dest: 'cdn/<%= major_version %>/latest',
                filter: 'isDirectory'
              }
            ]
          },
        },

        add_comment: {
            prod: {
                options: {
                    comments: ['Autogenerated, do not edit. All changes will be undone.', 'Version: <%= version %>', new Date()],
                    carriageReturn: "\n",
                    prepend: true,
                    syntaxes: {
                        '.js': '//',
                        '.css': ['/*', '*/']
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'cdn/<%= major_version %>/<%= version %>',
                    src: ['**/*.js', '**/*.css'],
                    dest: 'cdn/<%= major_version %>/<%= version %>'
                }]
            },
            dev: {
                options: {
                    comments: ['Autogenerated, do not edit. All changes will be undone.', new Date()],
                    carriageReturn: "\n",
                    prepend: true,
                    syntaxes: {
                        '.js': '//',
                        '.css': ['/*', '*/']
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'public',
                    src: ['**/*.js', '**/*.css'],
                    dest: 'public'
                }]
            }
        },

        // Will Automatically insert the correct prefixes for CSS properties. Just write plain CSS.
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 9']
            },
            dev: {
                src: 'public/css/*.css'
            },
            prod: {
                src: 'cdn/<%= major_version %>/<%= version %>/css/*.css'
            }
        },

        // Watch options: what tasks to run when changes to files are saved
        watch: {
            options: {},
            css: {
                files: ['source/css/*.scss'],
                tasks: ['css'] // Compile with Compass when Sass changes are saved
            },
            js: {
                files: ['source/js/*.js'], // Watch for changes in JS files
                tasks: ['javascript']
            },
            html: {
                files: ['source/_patterns/**/*.mustache', 'source/_patterns/**/*.json', 'source/_data/*.json'], // Watch for changes to these html files to run htmlhint (validation) task
                tasks: ['shell:patternlab'],
                options: {
                    spawn: false
                }
            },
            images: {
                files: ['source/images/*.{png,jpg,gif}'],
                tasks: ['images']
            },
            copy: {
                files: ['source/<%= copyFiles %>'],
                tasks: ['copy']
            }
        },

        // Fire up a local server and inject css.
        browserSync: {
            bsFiles: {
                src: [
                    'public/css/*.css',
                    'public/**/*.html',
                    'public/**/*.js',
                    'public/**/*.{svg,png,jpg,gif}'
                ]
            },
            options: {
                watchTask: true,
                proxy: "alps.dev"
            }
        }

    });

    /**
     * CSS tasks
     */
    grunt.registerTask('css', [
        'sass',
        'autoprefixer:dev'
    ]);

    /**
     * JavaScript tasks
     */
    grunt.registerTask('javascript', [
        'uglify:dev'
    ]);

    /**
     * Images tasks
     */
    grunt.registerTask('images', [
        'imagemin'
    ]);

    /**
     * Styleguide specific tasks
     */
    grunt.registerTask('sg', [
        'sass:sg',
        'shell:patternlab'
    ]);

    /**
     * Dev tasks
     */
    grunt.registerTask('dev', [
        'css',
        'javascript',
        'shell:patternlab',
        'images',
        'copy',
        'add_comment:dev'
    ]);

    /**
     * Production tasks
     */
    grunt.registerTask('prod', [
        'mkdir:prod',
        'sass:prod',
        'autoprefixer:prod',
        'uglify:prod',
        'shell:patternlab',
        'images',
        'copy',
        'symlink',
        'add_comment'
    ]);

    /**
     * DeployBot Task
     */
    grunt.registerTask('deploybot', [
        'css',
        'javascript',
        'images',
        'copy',
        'add_comment:dev'
    ]);



    /**
     * Default Tasks
     */
    grunt.registerTask('default', ['dev', 'browserSync', 'watch']);

    /**
     * Staging Tasks
     */
    grunt.registerTask('staging', ['dev']);

};
