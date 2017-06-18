'use strict';
module.exports = function() {

// Запускаем сервер
$.gulp.task('serve', function() {
  $.browserSync.init({
    server: "./" // Базовая директория
  });
  $.browserSync.watch('./**/*.*').on('change', $.browserSync.reload);
  // Отслеживаем изменения и передаем на клиент
});

};
