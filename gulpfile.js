var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
gulp.task('sass', function() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css/'))
});
gulp.task('w', function() {
    gulp.watch('src/sass/index.scss', gulp.series('src'))
})
gulp.task('web', function() {
    return gulp.src('./')
        .pipe(webserver({
            port: 8080,
            open: true,
            liveload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === favicon.ico) {
                    return res.end();
                }
                if (pathname === 'api/list') {

                }
            }
        }))
})