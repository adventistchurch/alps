const sass = require('node-sass');
const semver = require('semver');

module.exports = function (grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  const pkg = grunt.file.readJSON('package.json');

  /**
   * Major Version and Version Number
   *
   * @description
   * Increase the version number to the desired version for css and javascript
   * files. This will also create a version directory in the /cdn folder in the structure
   * of /cdn/<major_version/<version>/ that contains the javascript and css.
   */
  const major_version = "3";
  const version = "3.9.1";

  /**
   * Split SCSS files by theme
   *
   */
  const themes = [
    'treefrog',
    'ming',
    'bluejay',
    'iris',
    'lily',
    'scarlett',
    'campfire',
    'winter',
    'forest',
    'cave',
    'denim',
    'emperor',
    'grapevine',
    'velvet',
    'earth',
    'night',
  ];
  const sassFiles = {
    'cdn/<%= major_version %>/<%= version %>/css/main.css': 'source/css/main.scss',
  };
  for (const themeName of themes) {
    sassFiles[`cdn/<%= major_version %>/<%= version %>/css/main-${themeName}.css`] = `source/css/main-${themeName}.scss`
  }

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
        command: "php core/console --generate",
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
        implementation: sass,
        imagePath: 'source/images',
        precision: 5
      },
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true,
        },
        files: {
          'public/v3/css/dev.css': 'source/css/dev.scss',
          'public/v3/styleguide/css/styleguide.min.css': 'source/css/styleguide.scss'
        }
      },
      prod: {
        options: {
          outputStyle: 'compressed',
          sourceMap: false,
        },
        files: sassFiles,
      }
    },

    jsHeadFiles: [
      // Include:
      'source/js/head-scripts.js'
    ],

    jsFootFiles: [
      // Include:
      'source/js/jquery-ref.js',
      'source/js/plugins.js',
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
          'public/v3/js/head-script.min.js': ['<%= jsHeadFiles %>'],
          'public/v3/js/script.min.js': ['<%= jsFootFiles %>']
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
          src: ['**/*.{png,jpg,gif,svg}'], // Actual patterns to match
          dest: 'public/v3/images/' // Destination path prefix
        }]
      }
    },

    copyFiles: '**/*.{eot,ttf,woff,pdf,png,jpg,gif,svg}',

    copy: {
      dev: {
        files: [
          // includes files within path
          {
            expand: true,
            cwd: 'source/',
            src: ['<%= copyFiles %>'],
            dest: 'public/v3/',
            filter: 'isFile'
          }
        ]
      },
      prod: {
        files: [{
          expand: true,
          cwd: 'source/',
          src: ['<%= copyFiles %>'],
          dest: 'cdn/<%= major_version %>/<%= version %>/'
        }]
      },
      styleGuide: {
        files: [
          // Export public/patterns directory to IGS's includes
          // This is used to include the actual code into the code samples
          {
            expand: true,
            cwd: 'public/v3/patterns/',
            src: ['00-atoms*/*', '01-molecules*/*', '02-organisms*/*', '03-templates*/*'],
            dest: '../igs-guidelines/_includes/patterns/',
            rename: function (dest, src) {
              return dest + src.replace(/@inprogress|@complete|@inreview/g, '');
            }
          },
          // Export public/patterns directory to IGS patterns directory
          // This is used to pipe the live patterns into the iframe
          // Needs to be here in order to generate into the '_site' directory.
          {
            expand: true,
            cwd: 'public/v3/patterns/',
            src: ['00-atoms*/*', '01-molecules*/*', '02-organisms*/*', '03-templates*/*'],
            dest: '../igs-guidelines/patterns/',
            rename: function (dest, src) {
              return dest + src.replace(/@inprogress|@complete|@inreview/g, '');
            }
          },
          // Export css directory to IGS css directory
          {
            expand: true,
            cwd: 'public/v3/css/',
            src: ['**/*'],
            dest: '../igs-guidelines/v3/css'
          },
          // Export js directory to IGS js directory
          {
            expand: true,
            cwd: 'public/v3/js/',
            src: ['**/*'],
            dest: '../igs-guidelines/v3/js'
          },
          // Export images directory to IGS images directory
          {
            expand: true,
            cwd: 'public/v3/images/',
            src: ['**/*'],
            dest: '../igs-guidelines/v3/images'
          },
          // Export styleguide directory to IGS styleguide directory
          {
            expand: true,
            cwd: 'public/v3/styleguide/',
            src: ['**/*'],
            dest: '../igs-guidelines/v3/styleguide'
          }
        ]
      },
      drupalPatterns: {
        files: [{
          expand: true,
          cwd: 'source/_patterns/',
          src: ['**/*.twig'],
          dest: 'source/drupal-patterns/',
          rename: function (dest, src) {
            return dest + src.replace('.twig', '.html.twig');
          }
        }],
        options: {
          process: function (content, srcpath) {
            return content.replace(/.twig/g, '.html.twig');
          }
        }
      }
    },

    // Add {% raw %} jekyll tags to Twig files so it doesn't parse it.
    concat: {
      dist: {
        files: [{
          expand: true,
          cwd: 'public/v3/patterns/',
          src: ['00-atoms*/*.twig', '01-molecules*/*.twig', '02-organisms*/*.twig', '03-templates*/*.twig'],
          dest: '../igs-guidelines/_includes/patterns/'
        },
        {
          expand: true,
          cwd: 'public/v3/patterns/',
          src: ['00-atoms*/*.twig', '01-molecules*/*.twig', '02-organisms*/*.twig', '03-templates*/*.twig'],
          dest: '../igs-guidelines/patterns/'
        }
        ]
      },
      options: {
        stripBanners: true,
        banner: '{% raw %}',
        footer: '{% endraw %}'
      }
    },

    // Symlink creates a cdn/latest
    symlink: {
      options: {
        overwrite: true
      },
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
      },
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
      }
    },

    // Will Automatically insert the correct prefixes for CSS properties. Just write plain CSS.
    autoprefixer: {
      options: {
        browsers: ['last 4 versions', 'ie 9']
      },
      dev: {
        src: 'public/v3/css/*.css'
      },
      prod: {
        src: 'cdn/<%= major_version %>/<%= version %>/css/*.css'
      }
    },

    // Watch options: what tasks to run when changes to files are saved
    watch: {
      options: {},
      html: {
        files: ['source/**/*.twig', 'source/**/*.json', 'source/_data/*.json'], // Watch for changes to these html files to run htmlhint (validation) task
        tasks: ['shell:patternlab', 'css', 'javascript'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['source/css/*.scss'],
        tasks: ['css'] // Compile with Compass when Sass changes are saved
      },
      js: {
        files: ['source/js/*.js'], // Watch for changes in JS files
        tasks: ['javascript']
      },
      images: {
        files: ['source/images/*.{png,jpg,gif,svg}'],
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
          'public/v3/css/*.css',
          'public/v3/**/*.html',
          'public/v3/**/*.js',
          'public/v3/**/*.{png,jpg,gif,svg}'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: './public'
        },
        startPath: "/v3"
      }
    },
    'gh-pages': {
      options: {
        base: 'cdn',
        branch: 'cdn',
        add: true
      },
      src: ['**']
    }

  });

  /**
   * CSS tasks
   */
  grunt.registerTask('css', [
    'sass:dev',
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
   * Style Guide tasks
   */
  grunt.registerTask('style-guide-export', [
    'copy:styleGuide',
    'concat'
  ]);

  /**
   * Drupal pattern exporting
   */
  grunt.registerTask('export-drupal-patterns', [
    'copy:drupalPatterns'
  ]);

  /**
   * Dev tasks
   */
  grunt.registerTask('dev', [
    'copy:dev',
    'shell:patternlab',
    'images',
    'javascript',
    'css',
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
    'symlink',
    'copy:prod',
    'add_comment:prod',
    'versions'
  ]);

  grunt.registerTask('cdn', [
    'gh-pages'
  ]);

  /**
   * DeployBot Task
   */
  grunt.registerTask('deploybot', [
    // 'css',
    'sass:dev',
    'autoprefixer:dev',
    'javascript',
    'images',
    'copy',
    'add_comment:dev'
  ]);

  grunt.registerTask('versions', 'Create a versions.json file', () => {
    const versionsFile = 'cdn/3/versions.json';
    const changeLogFile = 'CHANGELOG.md';
    const changeLogData = grunt.file.read(changeLogFile);

    const exprVersions = /^## \[(?<version>[\d.]+)\].*\n(?<description>[^#]*)/gum;
    const matches = changeLogData.matchAll(exprVersions);

    const versionsData = [];

    for (const m of matches) {
      const v = m.groups.version;
      const desc = m.groups.description ? m.groups.description.trim() : '';

      const themesStyle = {};
      if (semver.gt(v, '3.6.2')) {
        for (const theme of themes) {
          themesStyle[theme] = `https://cdn.adventist.org/alps/3/${v}/css/main-${theme}.css`;
        }
      }

      versionsData.push({
        version: v,
        description: desc,
        styles: {
          main: `https://cdn.adventist.org/alps/3/${v}/css/main.css`,
          themes: themesStyle,
        },
        scripts: {
          main: `https://cdn.adventist.org/alps/3/${v}/js/script.min.js`,
          head: `https://cdn.adventist.org/alps/3/${v}/js/head-script.min.js`,
        },
      });
    }

    grunt.file.write(versionsFile, JSON.stringify(versionsData, null, 2));
  });

  /**
   * Default Tasks
   */
  grunt.registerTask('default', ['dev', 'browserSync', 'watch']);

  /**
   * Staging Tasks
   */
  grunt.registerTask('staging', ['dev']);

};
