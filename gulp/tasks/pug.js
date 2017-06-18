'use strict';

module.exports = function() {

  // Компилируем pug в html
  $.gulp.task('pug', function() {
      return $.gulp.src("source/pug/pages/index.pug")
        .pipe($.gp.pug({
          pretty: '\t'
        }))
        .on('error', $.gp.notify.onError(function(err){
          return {
            title: 'Pug',
            message: err.message
          };
        }))
        .pipe($.gulp.dest('./'))
  });
};
