var gulp          = require("gulp"),
    autoprefixer  = require("gulp-autoprefixer"),
    concat        = require("gulp-concat"),
    plumber       = require("gulp-plumber"),
    uglify        = require("gulp-uglify"),
    minify        = require('gulp-minify'),
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

gulp.task("js", function() {
  gulp.src([
        "node_modules/riot/riot+compiler.js",
        "node_modules/jquery/dist/jquery.js",
        "src/js/**/*.js"
      ])
      .pipe(plumber())
      .pipe(concat('app.js'))
      .pipe(uglify("app.js"))
      .pipe(gulp.dest("./www/html/js"));
});

gulp.task("tag", function() {
  gulp.src("src/tag/**/*tag")
      .pipe(plumber())
      .pipe(concat("all.tag"))
      .pipe(minify({ compress: true }))
      .pipe(gulp.dest("./www/html/tag"));
})

gulp.task("default", function() {
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  gulp.watch("src/js/**/*.js", ["js"]);
  gulp.watch("src/tag/**/*.tag", ["tag"]);
});
