// gulpfile.js
var gulp = require('gulp')
  ,imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean');

gulp.task('copy', ['clean'], function(){

  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){

    return gulp.src('dist')
      .pipe(clean());
});


gulp.task('build-img',['copy'], function() {

  gulp.src('src/img/**/*')
    .pipe(imagemin()) //minifica imagens para economizar banda do usuario
    .pipe(gulp.dest('src/img'));
});