# ALPS – Adventist Living Pattern System

This is the future home of the ALPS codebase. The pattern library is built off of [Pattern Lab](http://patternlab.io/), and a tool based on atomic design.

[![Deployment status from DeployBot](https://adventistchurch.deploybot.com/badge/77558060106370/73245.svg)](http://deploybot.com)

## Want to make changes?
If you want to make changes, feel free to fork the repository and create a pull request.

## Questions or Issues?
Questions or issues can be [filed as tickets on this repository](https://github.com/adventistchurch/alps/issues) and will be handled using the GitHub system.

## Seventh-day Adventist Pattern Lab

## Overview
This repository contains the front-end code for the Seventh Day Adventist project. [Pattern Lab](http://patternlab.io/) is the tool used for pattern template building and pattern library compilation.

### Getting Started

- set up your local dev url to be `alps.dev`
  - configure mamp with the server name of `alps.dev` and point the doc root to `alps/public`.
- install node globally](https://docs.npmjs.com/getting-started/installing-node)
- run `npm install` (may need to be run as `sudo`)
- run `composer install`
- run `grunt`

This creates all patterns, the styleguide, and the pattern lab site as well as a local server for development.

## Project Standards

### Front-End General Best Practices
1. Separation of presentation, content, and behavior.
2. Markup should be well-formed, semantically correct, and generally valid (if possible).
3. Javascript should progressively enhance the experience.
4. Always keep performance at top of mind when coding.

### CSS Coding Standards
The CSS in this project follows [Harry Robert's](http://csswizardry.com/) [itcss](http://itcss.io/) architecture. [CSS/SCSS Coding Best Practices](http://cssguidelin.es/) should be the referenced standards guide when writing sane, manageable, scalable CSS.

### Git Commit Messages
All commit messages should abide by the following criteria:

* Begin with a one line summary. It should be short (50 chars or less).
* This should be followed by a longer description if necessary.
* The first two items should be separated by an empty line.
* All lines should be wrapped at approximately 72 characters.
* Reference an issue in your commits whenever possible. Use the [Github standard](https://help.github.com/articles/closing-issues-via-commit-messages/) ```gh-34``` for ticket ```#34```.
* If you forget to reference the issue in your commit, and the commit has already been pushed, reference the commit hash in a comment on the ticket.

### Troubleshooting Installs

Make sure you are running your terminal/command line session as administrator. This could mean `sudo`, or opening the window with a right-click option.

# About Pattern Lab
- [Pattern Lab Website](http://patternlab.io/)
- [About Pattern Lab](http://patternlab.io/about.html)
- [Documentation](http://patternlab.io/docs/index.html)
- [Demo](http://demo.patternlab.io/)
![license](https://img.shields.io/github/license/pattern-lab/patternlab-php.svg)
[![Packagist](https://img.shields.io/packagist/v/pattern-lab/edition-mustache-standard.svg)](https://packagist.org/packages/pattern-lab/edition-mustache-standard) [![Gitter](https://img.shields.io/gitter/room/pattern-lab/php.svg)](https://gitter.im/pattern-lab/php)

# Pattern Lab Standard Edition for Mustache

The Pattern Lab Standard Edition for Mustache is the evolution of Pattern Lab 1. Pattern Lab is still, at its core, a prototyping tool focused on encouraging communication between content creators, designers, devs, and clients. It combines platform-agnostic assets, like the [Mustache](http://mustache.github.io/)-based patterns, with a PHP-based "builder." Pattern Lab 2 introduces [the beginnings of an ecosystem](http://patternlab.io/docs/advanced-ecosystem-overview.html) that will allow teams to mix, match and extend Pattern Lab to meet their specific needs. It will also make it easier for the Pattern Lab team to push out new features. Pattern Lab Standard Edition for Mustache is just [one of the four PHP-based Editions currently available](http://patternlab.io/docs/installation.html).

## Demo

You can play with a demo of the front-end of Pattern Lab at [demo.patternlab.io](http://demo.patternlab.io).

## Requirements

To use the basic features of Pattern Lab to compile patterns, you must have **PHP 5.4+** installed. On Mac OS X Pattern Lab should work "out of the box." If you're on Windows you can [download PHP from PHP.net](http://windows.php.net/download/). Pattern Lab comes with its own built-in web server.

Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies. It's required if you want to install Pattern Lab using Composer's `create-project` command or if you want to upgrade Pattern Lab in the future.

## Installing

There are two methods for downloading and installing the Standard Edition for Mustache:

* Download a pre-built project
* Create a project based on this Edition with Composer

### Download a pre-built project

The fastest way to get started with Pattern Lab's Standard Edition for Mustache is to download the latest pre-built version from the [releases page](https://github.com/pattern-lab/patternlab-php/releases/latest).

### Use Composer to create a project

Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies.

#### 1. Install Composer

Please follow the directions for [installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

#### 2. Install the Standard Edition for Mustache

Use Composer's [`create-project` command](https://getcomposer.org/doc/03-cli.md#create-project) to install the Standard Edition for Mustache into a location of your choosing. To create a project do the following:

1. In a terminal window navigate to where you want to install Pattern Lab
2. Type `composer create-project pattern-lab/edition-mustache-standard patternlab2-example && cd $_`
3. When prompted, type `1` to install the demo StarterKit

This will install the Standard Edition for Mustache along with the demo StarterKit into a directory called `patternlab2-example`. You will be automatically dropped into `patternlab2-example/` when the install is finished.

**Note:** If you clone or download this repository and use `composer install` to install the project dependencies you'll need to type the following to install the demo StarterKit:

    composer install-demo

Otherwise you'll have a very bare set-up of Pattern Lab.

## Get Up and Running

After installing do the following to start and view Pattern Lab:

1. In a terminal window navigate to the root of your project if you aren't there already
2. Type `php core/console --server --with-watch`

You should now be able to open [http://localhost:8080](http://localhost:8080) to see your generated site. Any changes you make in `./source/` will automatically rebuild your site and reload your browser.

As you get more comfortable with Pattern Lab you can [integrate it with a Gulp or Grunt workflow](http://patternlab.io/docs/advanced-integration-with-grunt.html) and drop some of the native Pattern Lab features like automatic browser reload. You can also check out [the list of plugins](http://patternlab.io/download.html).

## More Documentation

Obviously Pattern Lab is deeper than the install process. [Check out the documentation](https://patternlab.io/docs/) to learn about how to use patterns, how to modify the data used to populate those patterns, and about some advanced features.

## Migrating from Pattern Lab 1 to Pattern Lab 2

Pattern Lab 2 was a complete rewrite and reorganization of Pattern Lab 1. [Learn about the changes](http://patternlab.io/docs/changes-1-to-2.html). After installing the Standard Edition for Mustache do the following to migrate from Pattern Lab 1 to Pattern Lab 2:

1. Copy `./source` from your old project to your new install
2. Copy `./source/_patterns/00-atoms/00-meta/_00-head.mustache` to `./source/_meta/_00-head.mustache`
3. Copy `./source/_patterns/00-atoms/00-meta/_01-foot.mustache` to `./source/_meta/_00-foot.mustache`
4. Copy `./source/_data/annotations.js` to `./source/_annotations/annotations.js`

Everything else should work without changes.

## Need Pattern Lab 1?

The [source code for Pattern Lab 1](https://github.com/pattern-lab/patternlab-php/releases/tag/v1.1.0) is still available for download.

## Packaged Components

The Standard Edition for Mustache installs the following components:

* `pattern-lab/core`: [GitHub](https://github.com/pattern-lab/patternlab-php-core), [Packagist](https://packagist.org/packages/pattern-lab/core)
* `pattern-lab/patternengine-mustache`: [documentation](https://github.com/pattern-lab/patternengine-php-mustache#mustache-patternengine-for-pattern-lab-php), [GitHub](https://github.com/pattern-lab/patternengine-php-mustache), [Packagist](https://packagist.org/packages/pattern-lab/patternengine-mustache)
* `pattern-lab/plugin-reload`: [GitHub](https://github.com/pattern-lab/plugin-php-reload), [Packagist](https://packagist.org/packages/pattern-lab/plugin-reload)
* `pattern-lab/styleguidekit-assets-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-assets-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-assets-default)
* `pattern-lab/styleguidekit-mustache-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-mustache-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-mustache-default)

## List All of the Available Commands and Their Options

To list all available commands type:

    php core/console --help

To list the options for a particular command type:

    php core/console --help --[command]
