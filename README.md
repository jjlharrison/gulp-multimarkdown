# gulp-multimarkdown

[![MIT Licence][licence-image]][licence-url] [![NPM Version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][david-dm-image]][david-dm-url]

[MultiMarkdown](http://fletcherpenney.net/multimarkdown/) Plugin for [Gulp](http://gulpjs.com).

This plugin is an adaptation of [gulp-markdown](https://github.com/sindresorhus/gulp-markdown).

## Install

```bash
$ npm install --save-dev gulp-markdown
```


## Usage

```js
var gulp = require('gulp');
var markdown = require('gulp-multimarkdown');

gulp.task('default', function () {
	return gulp.src('intro.md')
		.pipe(mulmarkdown())
		.pipe(gulp.dest('dist'));
});
```

[david-dm-image]: http://img.shields.io/david/jjlharrison/gulp-multimarkdown.svg?style=flat
[david-dm-url]: https://david-dm.org/jjlharrison/gulp-multimarkdown
[npm-image]: http://img.shields.io/npm/v/gulp-multimarkdown.svg?style=flat
[npm-url]: https://www.npmjs.org/package/gulp-multimarkdown
[travis-image]: http://img.shields.io/travis/jjlharrison/gulp-multimarkdown.svg?style=flat
[travis-url]: https://travis-ci.org/jjlharrison/gulp-multimarkdown
[licence-image]: http://img.shields.io/npm/l/gulp-multimarkdown.svg?style=flat
[licence-url]: https://tldrlegal.com/license/mit-license