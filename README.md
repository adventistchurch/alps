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

- [Install Composer globally](https://getcomposer.org/doc/00-intro.md#globally)
- run `composer install`
- Set up your local dev url to be `alps.test`
- [Install node globally](https://docs.npmjs.com/getting-started/installing-node)
- run `npm install` (may need to be run as `sudo`)
- run `grunt`

This creates all patterns, the styleguide, and the pattern lab site as well as a local server for development.

### CSS Object and Utility Based Styling

#### 7 Column Grid Layout Classes
*The 7 Column Grid is used on the page layout and all blocks*
- `.l-grid` Grid wrapper to make child divs flex
- `.l-grid--7-col` 7 Column grid wrapper
  - `.l-grid-item--x-col` Span x number of columns on mobile (<=500px)
  - `.l-grid-item--s--x-col` Span x number of columns at small breakpoint (>500px)
  - `.l-grid-item--m--x-col` Span x number of columns at medium breakpoint (>700px)
  - `.l-grid-item--l--x-col` Span x number of columns at large breakpoint (>900px)
  - `.l-grid-item--xl--x-col` Span x number of columns at xxlarge breakpoint (>1300px)
- `.l-grid-wrap` Span grid 100% of the viewport width
  - `.l-grid-wrap--x-of-7` Span grid x number of columns

#### Grid Shift Classes
*Shifts the grid over 1 column*
- `.u-shift--right--1-col--at-medium` Shift grid over to right 1 column at medium breakpoint (>700px)
- `.u-shift--left--1-col--at-medium` Shift grid over to left 1 column at medium breakpoint (>700px)
- `.u-shift--left--1-col--at-large` Shift grid over to left 1 column at large breakpoint (>900px)
- `.u-shift--left--1-col--at-xxlarge` Shift grid over to left 1 column at xxlarge breakpoint (>1300px)

#### Alignment Classes
*Positions the content in the Blocks or Page Header*
- `.u-flex--align-center` Flex align center
- `.u-flex--align-end` Flex align end
- `.u-flex--justify-center` Justify content center
- `.u-flex--justify-end` Justify content end
- `.u-text-align--center` Text align center
- `.u-text-align--right` Text align right
- `.u-text-align--left` Text align left

#### Theme Color Classes
*Apply class for theme color. Each theme has 5 color variations. Replace the {$key} with a value.*

**Color Keys {$key}**
- `darker`
- `dark`
- `base`
- `light`
- `lighter`

**Color Classes**
- `.u-theme--color--{$key}` Text Color
- `.u-theme--link-hover--{$key}` Link Color
- `.u-theme--background-color--{$key}` Background Color
- `.u-theme--border-color--{$key}` Border Color
  - `.u-theme--border-color--{$key}--left` Left Border Color
  - `.u-theme--border-color--{$key}--right` Right Border Color
  - `.u-theme--border-color--{$key}--Top` Top Border Color
  - `.u-theme--border-color--{$key}--Bottom` Bottom Border Color
- `.u-theme--path-fill--{$key}` SVG Fill Cover

### Twig Include Syntax
In order to play nice with environments outside of Pattern Lab, we use the default [Twig include syntax](https://twig.sensiolabs.org/doc/2.x/functions/include.html) over the Pattern Lab shorthand.

**Don't do this:**
```twig
{% include 'templates-home' %}
```

**Do this:**
```twig
{% include '@templates/home@complete.twig' %}
```

### Exporting Assets to Adventist Identity Guideline System
To export the patterns to the Adventist Identity Guideline System, run the following grunt export command: `grunt style-guide-export`. All patterns will be copied over to the igs-guidelines repo, which should be located in the same root folder as ALPS , when this gets run. This command will clean up the files, removing any flags that are unneeded in the igs-guidelines repo.

### Drupal Pattern Exporting
For Drupal projects utilizing ALPS twig files, you'll need to run the pattern export command in order to generate the Drupal-specific file naming.

- Create a directory named "drupal-patterns" in `/source/`
- run `grunt export-drupal-patterns` - this will copy all patterns from the `/source/_patterns/` directory and rename the `.twig` file extensions to `.html.twig`

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

# Pattern Lab Standard Edition for Twig

The Standard Edition for Twig gives developers and designers a clean and stable base from which to develop a Twig-based pattern library.

## Packaged Components

The Standard Edition for Twig comes with the following components:

* `pattern-lab/core`: [GitHub](https://github.com/pattern-lab/patternlab-php-core), [Packagist](https://packagist.org/packages/pattern-lab/core)
* `pattern-lab/patternengine-twig`: [documentation](https://github.com/pattern-lab/patternengine-php-twig#twig-patternengine-for-pattern-lab-php), [GitHub](https://github.com/pattern-lab/patternengine-php-twig), [Packagist](https://packagist.org/packages/pattern-lab/patternengine-twig)
* `pattern-lab/styleguidekit-assets-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-assets-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-assets-default)
* `pattern-lab/styleguidekit-twig-default`: [GitHub](https://github.com/pattern-lab/styleguidekit-twig-default), [Packagist](https://packagist.org/packages/pattern-lab/styleguidekit-twig-default)

## Installing

There are two methods for downloading and installing the Standard Edition for Twig:

* [Download a pre-built project](#download-a-pre-built-package)
* [Use Composer to create a project](#use-composer-to-create-a-project)

### Download a pre-built project

The fastest way to get started with the Standard Edition for Twig is to [download the pre-built version](https://github.com/pattern-lab/edition-php-twig-standard/releases) from the [releases page](https://github.com/pattern-lab/edition-php-twig-standard/releases). The pre-built project comes with the [Base StarterKit for Twig](https://github.com/pattern-lab/starterkit-twig-base) installed by default.

**Please note:** Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies. To upgrade the Standard Edition for Twig or to install plug-ins you'll need to [install Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx). We recommend that you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

### Use Composer to create a project

Pattern Lab uses [Composer](https://getcomposer.org/) to manage project dependencies.

#### 1. Install Composer

Please follow the directions for [installing Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) on the Composer website. We recommend you [install it globally](https://getcomposer.org/doc/00-intro.md#globally).

#### 2. Install the Standard Edition for Twig

Use Composer's [`create-project` command](https://getcomposer.org/doc/03-cli.md#create-project) to install the Standard Edition for Twig into a location of your choosing. In Terminal type:

    cd install/location/
    composer create-project pattern-lab/edition-twig-standard your-project-name && cd $_

This will install the Standard Edition for Twig into a directory called `your-project-name` in `install/location/`. During the set-up process you will be asked to install an appropriate StarterKit. You will be automatically dropped into the project directory after the process is finished.

## Updating Pattern Lab

To update Pattern Lab please refer to each component's GitHub repository. The components are listed at the top of the README.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

### List all of the available commands

To list all available commands type:

    php core/console --help

To list the options for a particular command type:

    php core/console --help --[command]

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    php core/console --generate

### Watch for changes and re-generate Pattern Lab

To watch for changes and re-generate the front-end for Pattern Lab type:

    php core/console --watch

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a seperate window type:

    php core/console --server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Install a StarterKit

To install a near-empty StarterKit as a starting point for your project type:

    php core/console --starterkit --init

To install a specific StarterKit from GitHub type:

    php core/console --starterkit --install <starterkit-vendor/starterkit-name>


# Twig PatternEngine for Pattern Lab

The Twig PatternEngine allows you to use [Twig](http://twig.sensiolabs.org) as the template language for Pattern Lab PHP. Once the PatternEngine is installed you can use Twig-based StarterKits and StyleguideKits.

## Installation

The Twig PatternEngine comes pre-installed with the [Pattern Lab Standard Edition for Twig](https://github.com/pattern-lab/edition-php-twig-standard). Please start there for all your Twig needs.

### Composer

Pattern Lab PHP uses [Composer](https://getcomposer.org/) to manage project dependencies with Pattern Lab Editions. To add the Twig PatternEngine to the dependencies list for your Edition you can type the following in the command line at the base of your project:

    composer require pattern-lab/patternengine-twig

See Packagist for [information on the latest release](https://packagist.org/packages/pattern-lab/patternengine-twig).

## Overview

This document is broken into three parts:

* [Working with Patterns and Twig](#working-with-patterns-and-twig)
* [Extending Twig Further](#extending-twig-further)
* [Available Loaders for Plugin Developers](#available-loaders)

## Working with Patterns and Twig

Twig provides access to two features that may help you extend your patterns, [macros](http://twig.sensiolabs.org/doc/templates.html#macros) and layouts via[template inheritance](http://twig.sensiolabs.org/doc/templates.html#template-inheritance). The Twig PatternEngine also supports the [pattern partial syntax](http://patternlab.io/docs/pattern-including.html) to make including one pattern within another very easy.

* [Pattern includes](#pattern-includes)
* [Macros](#macros)
* [Template inheritance](#template-inheritance)

### Pattern includes

Pattern includes take advantage of the [pattern partial syntax](http://patternlab.io/docs/pattern-including.html) as a shorthand for referencing patterns from across the system without needing to rely on absolute paths. The format:

```
{% include "[patternType]-[patternName]" %}
```

For example, let's say we wanted to include the following pattern in a molecule:

```
source/_patterns/00-atoms/03-images/02-landscape-16x9.twig
```

The **pattern type** is _atoms_ (from `00-atoms`) and the **pattern name** is _landscape-16x9_ from (from `02-landscape-16x9.twig`). Pattern sub-types are never used in this format and any digits for re-ordering are dropped. The shorthand partial syntax for this pattern would be:

```
{% include "atoms-landscape-16x9" %}
```

### Macros

The requirements for using macros with Pattern Lab:

* Files must go in `source/_macros`
* Files must have the extension `.macro.twig` (_this can be modified in the config_)
* The filename will be used as the base variable name in Twig templates

**Please note:** ensure that there is no overlap between the keys for your macros and the keys for your data attributes. A macro with the name `forms.macro.twig` will conflict with a root key with the name `forms` in your JSON/YAML. Both are accessed via `{{ forms }}` in Twig.

An example of a simple macro called `forms.macro.twig` in `source/_macros`:

```twig
{% macro input(name) %}
    <input type="radio" name="{{ name }}" value="Dave" /> {{ name }}
{% endmacro %}
```

Would be used like this in a pattern:

```twig
{{ forms.input("First name") }}
```

### Template inheritance

How to use [Template Inheritance](http://twig.sensiolabs.org/doc/templates.html#template-inheritance) with Pattern Lab:

* Files must have the extension `.twig`.
* Files can be extended either by using Pattern Lab's normal shorthand syntax (e.g, `{% extends 'templates-extended-layout'%}`).
* Files can optionally go in `source/_layouts` in order to hide them from the list of patterns and then you can just use the filename as reference (e.g., `{% extends 'extended-layout'%}`).
* Files that are in the same directory can also just use the file name without the shorthand syntax (however, it must include the extension). So if `file1.twig` and `file2.twig` were in same directory, you could place this code in `file2.twig`: `{% extends 'file1.twig' %}`.

An example of a simple layout called `base.twig` in `source/_layouts`:

```twig
<!DOCTYPE html>
<html>
    <head>
        {% block head %}
            <link rel="stylesheet" href="style.css" />
            <title>{% block title %}{% endblock %} - My Webpage</title>
        {% endblock %}
    </head>
    <body>
        <div id="content">{% block content %}{% endblock %}</div>
        <div id="footer">
            {% block footer %}
                &copy; Copyright 2011 by <a href="http://domain.invalid/">you</a>.
            {% endblock %}
        </div>
    </body>
</html>
```

Would be used like this in a pattern:

```twig
{% extends "base.twig" %}

{% block title %}Index{% endblock %}
{% block head %}
    {{ parent() }}
    <style type="text/css">
        .important { color: #336699; }
    </style>
{% endblock %}
{% block content %}
    <h1>Index</h1>
    <p class="important">
        Welcome on my awesome homepage.
    </p>
{% endblock %}
```

All uses of `extends` above also work with `includes`, `embed` and most likely many other Twig Tags. Let us know if you run into interesting or unexpected use cases!

## Extending Twig Further

Twig comes with a number of ways to extend the underlying template parser. You can you can add [extra tags](http://twig.sensiolabs.org/doc/advanced.html#tags), [filters](http://twig.sensiolabs.org/doc/advanced.html#filters), [tests](http://twig.sensiolabs.org/doc/advanced.html#tests), and [functions](http://twig.sensiolabs.org/doc/advanced.html#functions). The Twig PatternEngine tries to simplify these extensions by allowing you to create files in specific folders and then auto-load the extensions for you. Learn more about:

* [Filters](#filters)
* [Functions](#functions)
* [Tags](#tags)
* [Tests](#tests)

You can also:

* [Enable `dump()`](#enable-dump)
* [Modify the Default Date and Interval Formats](#modify-the-default-date-and-interval-formats)
* [Quickly disable extensions](#quickly-disable-extensions)

### Filters

The requirements for using filters with Pattern Lab:

* Files must go in `source/_twig-components/filters`
* Files must have the extension `.filter.php` (_this can be modified in the config_)
* The filter **must** set the variable `$filter`
* Only one filter per file (_e.g. can only set `$filter` once per file_)

An example function called `rot13.filter.php` in `source/_twig-components/filters`:

```php
<?php

$filter = new Twig_SimpleFilter('rot13', function ($string) {
	return str_rot13($string);
});

?>
```

This filter would be used like this in a pattern:

```twig
{{ bar|rot13 }}
```

### Functions

The requirements for using functions with Pattern Lab:

* Files must go in `source/_twig-components/functions`
* Files must have the extension `.function.php` (_this can be modified in the config_)
* The function **must** set the variable `$function`
* Only one function per file (_e.g. can only set `$function` once per file_)

An example function called `boo.function.php` in `source/_twig-components/functions`:

```php
<?php

$function = new Twig_SimpleFunction('boo', function ($string) {
	return $string." boo! ";
});

?>
```

This function would be used like this in a pattern:

```twig
{{ boo("ghost says what?") }}
```

### Tests

The requirements for using tests with Pattern Lab:

* Files must go in `source/_twig-components/tests`
* Files must have the extension `.test.php` (_this can be modified in the config_)
* The test **must** set the variable `$test`
* Only one test per file (_e.g. can only set `$test` once per file_)

An example of a simple test called `red.test.php` in `source/_twig-components/tests`:

```php
<?php

$test = new Twig_SimpleTest('red', function ($value) {

	if (isset($value["color"]) && $value["color"] == 'red') {
		return true;
	}

	return false;
});

?>
```

This test would be used like this in a pattern:

```twig
{% if shirt is red %}
	Why did I ever sign-up with Starfleet?
{% endif %}
```

Where the JSON for the data to set `shirt` would be:

```json
"shirt": {
	"color": "red"
}
```

**Reminder:** all data in Pattern Lab is stored as an array and _not_ as an object. So `$object->attribute` won't work in tests.

### Tags

The requirements for using tags with Pattern Lab:

* Files must go in `source/_twig-components/tags`
* Files must have the extension `.tag.php` (_this can be modified in the config_)
* The filename **must** be reflected in class names. (e.g. `Project_{filename}_Node` and `Project_{filename}_TokenParser`)
* Only one tag per file

Tags are the most complicated extension to set-up with Pattern Lab. Three steps are needed to define a new tag in Twig:

* Defining a Token Parser class (_responsible for parsing the template code_)
* Defining a Node class (_responsible for converting the parsed code to PHP_)
* Registering the tag.

Pattern Lab takes care of the registering for you based on the file name.

An example of a simple tag called `setdupe.tag.php` in `source/_twig-components/tags` that mimics the default `set` tag. Please note all of the locations where class names incorporate the filename, `setdupe`.

```php
<?php

// these files are loaded three times and we can't re-set a class
if (!class_exists("Project_setdupe_Node")) {

	class Project_setdupe_Node extends Twig_Node {

		public function __construct($name, Twig_Node_Expression $value, $line, $tag = null) {
			parent::__construct(array('value' => $value), array('name' => $name), $line, $tag);
		}

		public function compile(Twig_Compiler $compiler) {
			$compiler
				->addDebugInfo($this)
				->write('$context[\''.$this->getAttribute('name').'\'] = ')
				->subcompile($this->getNode('value'))
				->raw(";\n");
		}

	}

}

// these files are loaded three times and we can't re-set a class
if (!class_exists("Project_setdupe_TokenParser")) {

	class Project_setdupe_TokenParser extends Twig_TokenParser {

		public function parse(Twig_Token $token) {

			$parser = $this->parser;
			$stream = $parser->getStream();

			$name = $stream->expect(Twig_Token::NAME_TYPE)->getValue();
			$stream->expect(Twig_Token::OPERATOR_TYPE, '=');
			$value = $parser->getExpressionParser()->parseExpression();
			$stream->expect(Twig_Token::BLOCK_END_TYPE);

			return new Project_setdupe_Node($name, $value, $token->getLine(), $this->getTag());
		}

		public function getTag() {
			return 'setdupe';
		}

	}

}

?>
```

This tag would be used like this in a pattern:

```
{% setdupe name = "Ziggy" %}
{{ name }}
```

### Enable `dump()`

To use `dump()` set `twigDebug` in `config/config.yml` to `true`.

### Modify the Default Date and Interval Formats

You can modify the default date and interval formats for Twig by editing the `twigDefaultDateFormat` and `twigDefaultIntervalFormat` in `config/config.yml`. Set them to an empty string to use Twig's default formats. **Please note:** both must be set for this feature to work.

### Quickly Disable Extensions

To disable extensions that you're no longer using simply add an underscore to the beginning of a filename and then re-generate your site. For example, the enabled rot13 filter:

    source/_twig-components/filters/rot13.filter.php

And the disabled rot13 filter:

    source/_twig-components/filters/_rot13.filter.php

Then re-generate your Pattern Lab site with:

    php core/console --generate

## Available Loaders

If you're building a plugin that will be parsing Twig files you have access to three loaders. It's recommended that you use these instead of accessing Twig directly as these loaders will work with other PatternEngines.

### The String Loader

The string loader takes a simple string and compiles it. To use:

```php
$data         = array("hello" => "world");
$string       = "If I say hello you say {{ hello }}.";
$stringLoader = \PatternLab\Template::getStringLoader();
$output       = $stringLoader->render(array("string" => $string, "data" => $data));
print $output; // outputs "If I say hello you say world."
```

### The Filesystem Loader

The filesystem loader will look for templates in the configured StyleguideKit directory and compile them. The template location for the filesystem loader can't be modified. To use:

```php
$data             = array(...);
$filesystemLoader = \PatternLab\Template::getFilesystemLoader();
$output           = $filesystemLoader->render(array("template" => "viewall", "data" => $data));
print $output; // outputs the viewall view from the configured styleguidekit
```

### The Pattern Loader

The pattern loader looks for patterns and allows the use of the Pattern Lab-specific partial syntax. To use:

```php
$data                  = array(...);
$patternContent        = file_get_contents("path/to/pattern");
$patternEngineBasePath = \PatternLab\PatternEngine::getInstance()->getBasePath();
$patternLoaderClass    = $patternEngineBasePath."\Loaders\PatternLoader";
$patternLoader         = new $patternLoaderClass($options);
$code                  = $patternLoader->render(array("pattern" => $patternContent, "data" => $data));
print $output; // outputs the given pattern
```
