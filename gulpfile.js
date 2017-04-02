"use strict";
 
// gulp & gulp plugins
const gulp     = require("gulp");
const less     = require("gulp-less");
const sass     = require("gulp-sass");
const cssmin   = require("gulp-cssmin");
const concat   = require("gulp-concat");
const srcMaps  = require("gulp-sourcemaps");
const prefixer = require("gulp-autoprefixer");
const merge    = require('merge-stream');

// where to send the bundled css file
const cssDestination = "dist/styles";
 
gulp.task("sassify", function () {

    return gulp.src('src/styles/**/*.scss', { base: "./" })      
        .pipe(sass().on('error', sass.logError))
        .pipe(srcMaps.init())
        .pipe(prefixer())
        .pipe(cssmin())                 
        .pipe(concat('styles.min.css'))
        .pipe(srcMaps.write("."))
        .pipe(gulp.dest(cssDestination));
});
 
gulp.task('bundle-css', function() {
 
    var sassStream = gulp.src('src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('sass-bundle.scss'));
 
    var lessStream = gulp.src('src/styles/**/*.less')
        .pipe(less())
        .pipe(concat('less-bundle.less'));
   
    var cssStream = gulp.src('src/styles/**/*.css')
        .pipe(concat('css-bundle.css'));
 
    var mergedStream = merge(lessStream, sassStream, cssStream)
        .pipe(concat('styles.min.css'))           // css bundle name
        .pipe(srcMaps.init())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(srcMaps.write("."))
        .pipe(gulp.dest(cssDestination));
 
    return mergedStream;
});
