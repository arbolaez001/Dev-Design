'use strict';

var gulp = require('gulp'),
			sass = require('gulp-sass'),
			maps = require('gulp-sourcemaps'),
		concat = require('gulp-concat'),
		rename = require('gulp-rename'),
		uglify = require('gulp-uglify'),
	   	 del = require("del"),
 minifyCss = require('gulp-minify-css'),
 	ghPages = require('gulp-gh-pages');


gulp.task('compileSass', function(){
	//return mean is promise to return this, is used when one task depend on another
	return gulp.src('scss/application.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(rename("application.min.css"))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('css'))
});

gulp.task('concatScripts', function(){
	return gulp.src([
		'js/jquery.js',
		'js/slick/slick.js',
		'js/main.js'])
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'))
	});

gulp.task("minifyScripts",['concatScripts'], function(){
	return gulp.src('js/app.js')
		.pipe(uglify())
		.pipe(maps.init())
		.pipe(rename("main.min.js"))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('js'));
});

gulp.task("watchFiles", function(){
	gulp.watch('scss/**/*.scss', ['compileSass']);
	gulp.watch('js/**/*.js', ['minifyScripts']);
	});

gulp.task("build", ['compileSass','minifyScripts'], function(){
	return gulp.src(["js/slick/**","css/application.min.**","js/main.min.js",
									 "index.html","img/**", "fonts/**"],{ base: "./"})
			   .pipe(gulp.dest("dist"));
	});

gulp.task("clean", function(){
	del("dist");
	});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
	});

gulp.task('default', ["clean", "build"]);