/// <binding BeforeBuild='sassify' Clean='sassify' ProjectOpened='sassify' />
"use strict";

const gulp   = require("gulp"),
      cssmin = require("gulp-cssmin"),
      sass   = require("gulp-sass");

var root = "./Content/angular/";
var paths = {
    "sassy": root + "**/*.scss"
};

gulp.task("sassify", function () {
    return gulp.src(paths.sassy, { base: "./" })
      .pipe(sass().on('error', sass.logError))
      //.pipe(cssmin())
      .pipe(gulp.dest("."));
});