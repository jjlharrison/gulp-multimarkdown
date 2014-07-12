# gulp-multimarkdown

[![Build Status](https://travis-ci.org/jjlharrison/gulp-multimarkdown.svg?branch=master)](https://travis-ci.org/jjlharrison/gulp-multimarkdown) | [![Dependency Status](https://david-dm.org/jjlharrison/gulp-multimarkdown.svg)](https://david-dm.org/jjlharrison/gulp-multimarkdown)

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


## License

[MIT](http://opensource.org/licenses/MIT) [TL;DR](https://tldrlegal.com/license/mit-license)