// gulpfile.js
var gulp = require('gulp')
  ,imagemin = require('gulp-imagemin'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat'),
  htmlReplace = require('gulp-html-replace');

//task de nome padrao, chama todas as outras tasks
gulp.task('default', ['copy'], function() {
  gulp.start('build-img', 'build-js', 'build-html');
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

/*junta todos os arquivos .js e concatena salvando na pasta dist. 
Um unico arquivo para ser carregado no navegador do usuario o que melhora o desempenho*/
gulp.task('build-js', function() {
    gulp.src(['dist/js/jquery.js', 'dist/js/home.js', 'dist/js/produto.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});

//substitui os scripts de chamada dos arquivos .js por all.js
gulp.task('build-html', function() {
  gulp.src('dist/**/*.html')
    .pipe(htmlReplace({
      js: 'js/all.js'
  }))
    .pipe(gulp.dest('dist'));
})
