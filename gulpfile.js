const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', function(error) {
      console.error(error.message);
    }))
    .pipe(gulp.dest('css/style'));
}


function watch() {
  gulp.watch('scss/**/*.scss', buildStyles);
}

gulp.task('buildStyles', buildStyles);
gulp.task('watch', watch);

gulp.task('default', gulp.series('buildStyles', 'watch'));
