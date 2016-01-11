var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var browserSync=require('browser-sync');
var nodemon = require('gulp-nodemon');


gulp.task('less', function() {
    // Code for the default task
    return gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('stylesheets'))
});


gulp.task('watch',function(){

	gulp.watch('less/**/*.less',['less']);

});


gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})


    gulp.task('default', ['start', 'watch']);
//gulp.src indique à la tâche gulp quels fichiers utiliser pour la tâche,
//tandis que gulp.dest indique où mettre les fichiers qui résultent de l’exécution de la tâche.
// LESS compilter configuration
