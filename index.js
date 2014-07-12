(function(){
	"use strict";
	var gutil = require('gulp-util'),
	    through = require('through2'),
	    multimarkdown = require('multimarkdown');

	module.exports = function (options) {
		return through.obj(function (file, enc, cb) {
			if (file.isNull()) {
				this.push(file);
				return cb();
			}

			if (file.isStream()) {
				this.emit('error', new gutil.PluginError('gulp-markdown', 'Streaming not supported'));
				return cb();
			}

			file.contents = new Buffer(multimarkdown.convert(file.contents.toString()));
			file.path = gutil.replaceExtension(file.path, '.html');
			this.push(file);
			cb();
		});
	};
})();