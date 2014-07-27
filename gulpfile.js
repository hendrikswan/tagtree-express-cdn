var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-ruby-sass'),
  nodemon = require('gulp-nodemon');


gulp.task('sass', function(){
    gulp.src('./sass/*.scss')
        .pipe(sass({sourcemap: false}))
        .pipe(gulp.dest('public/stylesheets'));
    });

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('nodemon', function () {
  nodemon({ script: 'index.js', ext: 'ejs js css'})
    .on('restart', function () {
      console.log('restarted server after file change')
    })
});

gulp.task('default', ['sass', 'nodemon', 'watch']);
