# Changelog
A record of the changes made to `ALPS V3`.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.5.5]
## Fixed:
- Fixed bug on `.u-shift--left--1-col--standard` when `.hide-sabbath` applies.

## [3.5.4]
### Added:
- Added depth classes for comments. (For Wordpress). [#458](https://github.com/adventistchurch/alps/pull/458)

### Fixed:
- Fixed the spacing before the blockquotes.

## [3.5.3]
### Added:
- Added `.u-link--no-underline` and `.o-link-wrapper--no-underline a` classes.

## [3.5.2]
### Fixed:
- Updating the blockquote styles to remove certain nested styles.

## [3.5.1]
### Fixed:
- Fixes issue with icon not being displayed in Blocks. (#450)[https://github.com/adventistchurch/alps/pull/450]
- Randomizes images on the news template.

## [3.5.0]
### Added:
- Adding the `Article Video` template.

## [3.4.1]
### Fixed:
- Fixing the `u-spacing--double` instances on the NEWS page that were too large. Switched them to `u-spacing`.

## [3.4.0]
### Added:
- Added a wrapper class for making deep links underlined: `o-link-wrapper--underline`. [#446](https://github.com/adventistchurch/alps/pull/446)

## [3.3.0]
### Added:
- Added an alternate Block Quote that is less bold. [#398](https://github.com/adventistchurch/alps/issues/398)

### Fixed:
- Fixed the menu arrows on dark themes. [#444](https://github.com/adventistchurch/alps/pull/444)

## [3.2.0]
### Added:
- Added the hero carousel with inset text. This was pulled back from ALPS for Wordpress as the carousel feature was built there. [ALPS for Wordpress: #428](https://github.com/adventistchurch/alps-wordpress/pull/428)

### Fixed:
- Fixed the dropcap javascript error that was putting html characters in the cap instead of the letter. [#431](https://github.com/adventistchurch/alps-wordpress/issues/431)

## [3.1.2]
### Fixed:
- Fix for content read more and media blocks with video button. [#428](https://github.com/adventistchurch/alps/pull/428)


## [3.1.1]
### Fixed:
- Fixed to buttons being too wide. [#426](https://github.com/adventistchurch/alps/issues/426)
- CTA menu item on smaller screensizes [#423](https://github.com/adventistchurch/alps/issues/423)
- Fixes to icon styling and updating the block cta json call. [#427](https://github.com/adventistchurch/alps/pr/427)


## [3.1.0]
### Added:
- Adding a new homepage design with some custom components. [#425](https://github.com/adventistchurch/alps/pr/425)


## [3.0.7]
### Added:
- Added a Call to Action styling for the primary navigation. [#420](https://github.com/adventistchurch/alps/issues/420)


## [3.0.6]
### Fixed:
- Fixes for the hero hovers. [#312](https://github.com/adventistchurch/alps-wordpress/issues/312)


## [3.0.5]
### Fixed:
- Fixed post header sticking to 6 columns when the Sabbath column is hidden. [#418](https://github.com/adventistchurch/alps/pull/418)


## [3.0.4]
### Fixed:
- Fixed touch navigation in midsized screens. [#414](https://github.com/adventistchurch/alps/issues/414)


## [3.0.3]
### Added:
- Added support for tertiary navigation. [#407](https://github.com/adventistchurch/alps/issues/407)


## [3.0.2]
### Added:
- Add new Call To Action (CTA) blocks with multiple option and shades. [#400](https://github.com/adventistchurch/alps/issues/400)
- Add a new extended and refined header, called `Page Header - Long` and `Page Header - Long with Subtitle`. [#397](https://github.com/adventistchurch/alps/issues/397)


## [3.0.1]
### Fixed
- Fixes the long menus and max-length for the menu area. [#383](https://github.com/adventistchurch/alps/issues/383)
- Fixes Menu overlays the Sabbath column on page load. [#384](https://github.com/adventistchurch/alps/issues/384)
- Fixes Menu missing items in the drawer on XSmall sizes [#389](https://github.com/adventistchurch/alps/issues/389)
- Fixes the way the background images are calcuated for the Sabbath column. [#392](https://github.com/adventistchurch/alps/issues/392)
- Fixes the grid on pages without a Sabbath column to flex out to 4 columns of text instead of 3. [#333](https://github.com/adventistchurch/alps/issues/333)
