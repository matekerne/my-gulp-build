'use strict';

module.exports = function() {

  // Объединяем и минифицируем библиотеки js
  $.gulp.task('jslibs', function() {
    return $.gulp.src([
      'source/js/libs/jquery.min.js'
    ])
    .pipe($.gp.concat('libs.js'))
    .pipe($.gp.uglify())
    .pipe($.gp.rename('libs.min.js'))
    .pipe($.gulp.dest('js/libs'))
  });
};
