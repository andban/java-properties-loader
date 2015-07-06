"use strict";

var gulp = require('gulp');
var fs = require('fs-extra');

gulp.task('clean', function (done) {
  fs.remove(__dirname + '/build', done);
});

gulp.task('lint', function () {
  var jshint = require('gulp-jshint');

  return gulp.src(['index.js', 'test/*.js', 'gulpfile.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'))
      .pipe(jshint.reporter('fail'));
});

gulp.task('build', ['clean'], function () {
  var webpack = require('gulp-webpack');

  return gulp.src('')
      .pipe(webpack({
        target: 'node',
        context: __dirname + '/test/',
        entry: './test.js',
        output: {
          path: __dirname + '/build/',
          filename: 'test.js'
        }
      }))
      .pipe(gulp.dest('build/'));
});

gulp.task('test', ['build'], function () {
  var mocha = require('gulp-mocha');
  require('should');

  return gulp.src('build/*.js', { read: false })
      .pipe(mocha());
});

gulp.task('default', ['lint', 'test']);

