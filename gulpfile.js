'use strict';

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		maps = require('gulp-sourcemaps');

gulp.task('compileSass', function(){
	return gulp.src('scss/application.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('css'))
});

gulp.task("build", [
	'compileSass'
	]);

gulp.task("watchSass", function(){
	gulp.watch('scss/**/*.scss', ['compileSass']);
	});

gulp.task('default', ["build"]);