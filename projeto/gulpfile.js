// gulpfile.js
var gulp = require('gulp')
  ,imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat');

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

/*junta todos os arquivos .js e concatena salvando na pasta dist. 
Um unico arquivo para ser carregado no navegador do usuario o que melhora o desempenho*/
gulp.task('build-js', function() {

    gulp.src('dist/js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});