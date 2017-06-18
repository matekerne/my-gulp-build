'use strict';
module.exports = function() {

// Компилируем less в css
$.gulp.task('less', function() {
  return $.gulp.src("source/less/styles.less")
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(function(error) {
        return {
          title: 'Styles',
          message: error.message
        };
      })
    }))
    .pipe($.gp.less())
    .pipe($.gp.autoprefixer({
      browsers: $.config.autoprefixerConfig
    }))
    .pipe($.gulp.dest("css"));
});

};
