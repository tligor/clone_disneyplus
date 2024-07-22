const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./build/styles/'));
}

function images() {
    return gulp.src('./source/assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/assets/images'))
        .on('error', function (err) {
            console.error('Gulp Images Error:', err.message);
        });
}

function watch() {
    gulp.watch('./source/styles/**/*.scss', styles);
    gulp.watch('./source/assets/images/**/*', images);
}

exports.default = gulp.parallel(styles, images);
exports.watch = watch;