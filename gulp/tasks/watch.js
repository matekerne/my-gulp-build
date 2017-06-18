'use strict';
module.exports = function() {

$.gulp.task('watch', function() {
  // Отслеживаем изменения
  $.gulp.watch('source/less/**/*.less', $.gulp.series('less'));
  $.gulp.watch('source/pug/**/*.pug', $.gulp.series('pug'));
});

};
