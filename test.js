'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var gulpMultimarkdown = require('./index');

it('should compile Markdown to HTML', function (cb) {
	var stream = gulpMultimarkdown();

	stream.on('data', function (file) {
		assert.equal(file.relative, 'fixture.html');
		assert.equal(file.contents.toString(), '<p><em>foo</em></p>');
		cb();
	});

	stream.write(new gutil.File({
		path: 'fixture.md',
		contents: new Buffer('*foo*')
	}));
});
