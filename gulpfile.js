var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var mocha  = require('gulp-mocha');

gulp.task('test', function() {
    return gulp
    	.src('test/moment-round.js', {read: false})
        .pipe(mocha());
});

gulp.task('deploy', function() {
    return gulp.src('src/*.js')
    	.pipe(gulp.dest('dist'))
        .pipe(uglify())
		.pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['test', 'deploy'], function() {

});