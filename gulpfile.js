// Requis:
var gulp = require('gulp');


// On inclut les plugins:
var plugins = require('gulp-load-plugins')();


// Variables de chemin:
var srcCss = './style';
var srcJs = './js';
var srcImg = './images';
var destCss = './style';
var destJs = './js';
var destImg = './images';


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


// -Minification du js:
gulp.task('uglify', function(){
  gulp.src(srcJs + '/js/*.js')
  .pipe(plugins.uglify())
  .pipe(plugins.rename({suffix:'.min'}))
  .pipe(gulp.dest(destJs + '/min'));
});


// -Minification des images:
gulp.task('minimg', function(){
  return gulp.src(srcImg + '/img/*.{png,jpg,jpeg,gif,svg}')
  .pipe(plugins.imagemin())
  .pipe(gulp.dest(destImg + '/imgmin'));
});


// Watch les changements de css:
gulp.task('watch', function(){
  gulp.watch(srcCss + '/sass/*.scss', ['css']);
});
