/**
 * @file 打包文件
 */
const gulp = require('gulp');
const less = require('gulp-less');
const min = require('gulp-clean-css');

gulp.task('css', () => {
    return gulp.src(['../src/**/*.less'])
        .pipe(less())
        .pipe(min())
        .pipe(gulp.dest('../dist/components/'));
});

gulp.task('js', () => {
    return gulp.src('../src/**/*.js')
        .pipe(gulp.dest('../dist/components'));
})

gulp.task('json', () => {
    return gulp.src('../src/**/*.json')
        .pipe(gulp.dest('../dist/components'));
});

gulp.task('swan', () => {
    return gulp.src('../src/**/*.swan')
        .pipe(gulp.dest('../dist/components'));
});

gulp.task('default', ['css', 'js', 'json', 'swan']);