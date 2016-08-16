var gulp          = require("gulp"),
    autoprefixer  = require("gulp-autoprefixer"),
    plumber       = require("gulp-plumber"),
    concat        = require('gulp-concat'),
    bulkSass      = require('gulp-sass-bulk-import'),
    sass          = require("gulp-sass");

gulp.task("sass", function() {
  gulp.src("src/scss/**/style.scss")
      .pipe(plumber())
      .pipe(bulkSass())
      .pipe(sass( {outputStyle: 'compressed'} ))
      .pipe(autoprefixer())
      .pipe(gulp.dest("./www/html/css"));
});

gulp.task("default", function() {
  gulp.watch("src/scss/**/*.scss",["sass"]);
});
