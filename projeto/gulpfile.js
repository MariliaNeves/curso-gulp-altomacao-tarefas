// gulpfile.js
var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  htmlReplace = require('gulp-html-replace'),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin'),
  cssmin = require('gulp-cssmin'),
  browserSync = require('browser-sync');

//task de nome padrao, chama todas as outras tasks
gulp.task('default', ['copy'], function() {
  gulp.start('build-img', 'usemin');
});

//copia os arquivos da pasta 'src'para 'dist'
gulp.task('copy', ['clean'], function(){
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

//remove pasta dist
gulp.task('clean', function(){
    return gulp.src('dist')
      .pipe(clean());
});


gulp.task('build-img', function() {
  gulp.src('src/img/**/*')
    .pipe(imagemin()) //minifica imagens para economizar banda do usuario
    .pipe(gulp.dest('src/img'));
});

gulp.task('usemin', function() {
  gulp.src('dist/**/*.html')
    .pipe(usemin({
      'js' : [uglify],
      'css' : [cssmin]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
    browserSync.init({
        injectChanges: true,
        server : {
          baseDir: 'src'
        }
    });
    gulp.watch('src/**/*').on('change', browserSync.reload);
});