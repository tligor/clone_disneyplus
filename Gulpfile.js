const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./source/styles/main.scss') // Certifique-se de que está apontando para o arquivo principal
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./build/styles/')); // Salva o arquivo compilado como main.css no diretório de destino
}

function watch() {
    gulp.watch('./source/styles/**/*.scss', styles);
}

exports.default = styles;
exports.watch = watch;