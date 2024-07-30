const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts/'));
}
async function images() {
    const { default: imagemin } = await import('gulp-imagemin');
    
    return gulp.src('./source/assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/assets/images/'))
        .on('error', function (err) {
            console.error('Erro no Gulp Images:', err.message);
        });
}

function styles() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./build/styles/'));
}

function watch() {
    gulp.watch('./source/styles/**/*.scss', styles);
    gulp.watch('./source/assets/images/**/*', images);
    gulp.watch('./source/scripts/*.js', gulp.parallel(scripts));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = watch;