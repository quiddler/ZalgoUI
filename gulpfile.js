"use strict";

const gulp   = require("gulp");
const cssmin = require("gulp-cssmin");
const sass   = require("gulp-sass");

var globs = {
    "sass": "./src/**/*.scss"
};

// transpiles scss files to minified css files in the same directory
gulp.task("sassify", function () {
    return gulp.src(globs.sass, { base: "./" })
      .pipe(sass().on('error', sass.logError))
      .pipe(cssmin())
      .pipe(gulp.dest("."));
});