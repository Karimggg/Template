var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

gulp.task( 'sass', function() {
	gulp.src( './scss/*.scss' )
		.pipe( sass({errLogToConsole: true}) )
		.pipe(  gulp.dest( './css' ) );
});

gulp.task( 'watch', function() {
	gulp.watch( './scss/*scss', function() {
		gulp.run( 'sass' );
	});
});