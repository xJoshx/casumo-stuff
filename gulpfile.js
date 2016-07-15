var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('pug', function () {
  return gulp.src('./src/modules/index.pug')
  .pipe(pug({}))
  .pipe(gulp.dest('./build'))
})

gulp.task('stylus', function () {
  return gulp.src('./src/stylus/main.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'));
})

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('copy-assets', function () {
  gulp.src(['./src/assets/**/*']).pipe(gulp.dest('./build/assets'));
})

gulp.task('production', ['stylus', 'pug', 'css', 'copy-assets'], function () {})
