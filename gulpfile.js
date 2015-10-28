var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');


gulp.task('css', function() {
    return gulp.src('public/*.css', {base: 'public'})
        .pipe(minifyCss())
        .pipe(gulp.dest('public'))
});


gulp.task('html', function() {
  return gulp.src(['public/*.html', 'public/**/*.html'], {base: 'public'})
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public'))
});


gulp.task('js', function() {
  return gulp.src('public/*.js', {base: 'public'})
    .pipe(uglify())
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['css', 'js', 'html']);