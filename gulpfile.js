var gulp            = require("gulp"),
    autoprefixer    = require("gulp-autoprefixer"),
    concat          = require("gulp-concat"),
    plumber         = require("gulp-plumber"),
    minify          = require('gulp-minify'),
    bulkSass        = require('gulp-sass-bulk-import'),
    sass            = require("gulp-sass"),
    webpackStream   = require("webpack-stream"),
    webpack         = require("webpack"),
    // webpack         = require('gulp-webpack'),
    webpackConfig   = require("./webpack.config");

gulp.task("sass", function() {
  gulp.src("src/scss/**/style.scss")
      .pipe(plumber())
      .pipe(bulkSass())
      .pipe(sass( {outputStyle: 'compressed'} ))
      .pipe(autoprefixer())
      .pipe(gulp.dest("./www/html/css"));
});

gulp.task('js', () => {

  return gulp.src('./src/js/app.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(plumber())
    .pipe(gulp.dest("./www/html/js"));

});

gulp.task("default", function() {
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  gulp.watch("src/js/**/*.js", ["js"]);
  gulp.watch("src/tag/**/*.tag", ["tag"]);
});
