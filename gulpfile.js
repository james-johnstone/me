var gulp  = require('gulp');
var less  = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('default', ['compile-less', 'watch-less']);

gulp.task('compile-less', function() {
  gulp.src('./public/css/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/css/dist'));
});

gulp.task('watch-less', function() {
  gulp.watch('./public/css/*.less' , ['compile-less']);
});
