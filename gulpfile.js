'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 3 version'],
        cascade: false
}))
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.parallel('sass'));
});