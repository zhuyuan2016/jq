var gulp = require('gulp'),
	connect = require('gulp-connect')



gulp.task('default', ['server', 'watch'])

gulp.task('server', function() {
	connect.server({
		livereload: true
	});
})

gulp.task('reload', function() {
	gulp.src('*.js').pipe(connect.reload());
})


gulp.task('watch', function() {
	gulp.watch(['*.html','*.js'], ['reload']);
})