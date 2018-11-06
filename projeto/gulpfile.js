// gulpfile.js
var gulp = require('gulp')
  ,imagemin = require('gulp-imagemin');

gulp.task('build-img', function() {

  gulp.src('src/img/**/*')
    .pipe(imagemin()) //minifica imagens para economizar banda do usuario
    .pipe(gulp.dest('src/img'));
});