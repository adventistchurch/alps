module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        pkg: pkg,
        shell: {
            patternlab: {
                options: {
                    execOptions: {
                        maxBuffer: 1024 * 1024 * 64,
                    },
                },
                command: "php core/builder.php -g"
            },
            go: {
                // command: "php -S localhost:4000 -t public"
            }
        },

        sass: {
            options: {
                outputStyle: 'nested',
                imagePath: 'source/images',
                precision: 5,
                sourceMap: true,
                includePaths: require('node-bourbon').includePaths
            },
            dev: {
                files: {
                    'public/css/main.css': 'source/css/main.scss'
                }
            }
        },

        jsFiles: [
            // Include:
            'source/js/plugins.js',
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
                    'public/js/script.min.js': ['<%= jsFiles %>']
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
                    }
                ]
            }
        },

        // Will Automatically insert the correct prefixes for CSS properties. Just write plain CSS.
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 9']
            },
            dev: {
                src: 'public/css/*.css'
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
     * Dev task
     */
    grunt.registerTask('dev', [
        'css',
        'javascript',
        'shell:patternlab'
        // 'images',
        // 'copy'
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
