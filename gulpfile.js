var gulp = require('gulp');
var sass = require('gulp-sass');

// Styles For SCSS
gulp.task('styles', function () {
	console.log('starting styles task');
	return gulp.src('app.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.pipe(gulp.dest(''));
});

gulp.task('default', ['styles'], function () {
	console.log('Starting default task');
});
