// Requis:
var gulp = require('gulp');


// On inclut les plugins:
var plugins = require('gulp-load-plugins')();


// Variables de chemin:
var srcCss = './style';
var srcJs = './js';
var destCss = './style';
var destJs = './js';


// TÂCHES:

// - Mise en page Css:
gulp.task('css', function(){
  gulp.src(srcCss + '/sass/*.scss')
  .pipe(plugins.sass())
  .pipe(plugins.csscomb())
  .pipe(plugins.cssbeautify({indent:'  '}))
  .pipe(plugins.autoprefixer())
  .pipe(gulp.dest(destCss + '/css'));
});


// -Minification des styles css:
gulp.task('minify', function(){
  gulp.src(srcCss + '/css/*.css')
  .pipe(plugins.csso())
  .pipe(plugins.rename({suffix:'.min'}))
  .pipe(gulp.dest(destCss + '/min'));
});


// -Minification des styles css
gulp.task('uglify', function(){
  gulp.src(srcJs + '/js/*.js')
  .pipe(plugins.uglify())
  .pipe(plugins.rename({suffix:'.min'}))
  .pipe(gulp.dest(destJs + '/min'));
});
