'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

// Задача по умолчанию
$.gulp.task('default', $.gulp.series(
  'pug',
  'less',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
