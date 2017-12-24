import gulp from 'gulp'
import browserSync from 'browser-sync'
import path from 'path'

gulp.task('watch', () => {
  browserSync.init({
    server: path.resolve(__dirname, '../public'),
    port: 4000,
    ui: {
      port: 4001
    }
  })

  gulp.watch(path.join(__dirname, '../src/**/*.js'), ['js:dev'])
  gulp.watch(path.join(__dirname, '../styles/**/*.less'), ['styles'])
  gulp.watch(path.join(__dirname, '../pages/**/*.ejs'), ['pages'])
  gulp.watch(path.join(__dirname, '../public/**/*.html'), browserSync.reload)
})
