var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    es2015 = require('babel-preset-es2015'),
    del = require('del'),
    webpack = require('gulp-webpack');

gulp.task("build", function () {
    return gulp.src('src/**/*.js')
        .pipe(babel({presets: [es2015]}))
        // .pipe(gulp.dest('dist'))
        // .pipe(webpack({
        //     entry: './dist/index.js',
        //     output: {
        //         path:  __dirname + '/dist/js',
        //         filename: 'main.js'
        //     },
        //     stats: {
        //         colors: true
        //     }
        // }))
        .pipe(gulp.dest('dist'))
})

// gulp.task('clean:dist', ['build'], function () {
//     del(['dist/**/*.js','!dist/main.js'])
// })


gulp.task('default', ['build'])
