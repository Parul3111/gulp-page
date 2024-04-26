const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
//const sourcemaps = require('gulp-sourcemaps');
//const imagemin = require('gulp-imagemin');

//scss to css folder create with Style file create  with minify 
gulp.task( 'styles', () => {
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('css'));
});


//scss to css file autoupdated! 
gulp.task( 'watch', () => {
    return gulp.watch('scss/*.scss', (done) => {
        gulp.series(['styles']) (done)
    })
});


//js create min file and autoupdated! 
//gulp.task( 'minifyjs', () => {
//    return gulp.src('js/*.js')
//    .pipe(minify())
//    .pipe(gulp.dest('js'))
//
//        
//    }
//);

