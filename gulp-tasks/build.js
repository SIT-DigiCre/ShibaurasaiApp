var gulp    = require('gulp');
var webpack = require('gulp-webpack');
var config  = require('../webpack.config.js')

gulp.task('build', function () {
    return gulp.src(config.entry)
        .pipe(webpack(config))
        .pipe(gulp.dest("./www/js"));
});