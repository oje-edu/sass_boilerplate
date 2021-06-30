'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync').create();

var paths = {
  css: {
    src: 'app/src/scss/*.scss',
    dest: 'app/dist/css'
  },
  js: {
    src: 'app/src/js/*.js',
    dest: 'app/dist/js'
  },
  html: {
    src: 'app/src/*.html',
    dest: 'app/dist'
  },
  img: {
    src: 'app/src/img/*{.png,.jpg,svg}',
    dest: 'app/dist/img'
  }
}


function styles() {
  return gulp
    .src(paths.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src(paths.js.src)
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

function images() {
  return gulp
    .src(paths.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img.dest))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './app/dist'
    }
  });

  gulp.watch(paths.css.src, styles);
  gulp.watch(paths.js.src, scripts);
  gulp.watch(paths.html.src, html).on('change', browserSync.reload);
  gulp.watch(paths.img.src, images);
}

exports.watch = watch;

var build = gulp.parallel(scripts, html, images, watch);

// default
gulp.task('default', build);