var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var rename = require('gulp-rename')
var nested = require('postcss-nested');
var uglify = require('gulp-uglify')
var include = require('gulp-include')
var postcssImport = require('postcss-import')

gulp.task('css', function () {
    var plugins = [
        postcssImport(),
        autoprefixer(),
        cssnano({
          reduceIdents: false
        }),
				nested
    ];
    return gulp.src('./css/experienceCats/index.css')
        .pipe(postcss(plugins))
		    .pipe( rename({
		      suffix: '.min'
		    }))
        .pipe(gulp.dest('./css/experienceCats'));
});

gulp.task('js', function() {
  return gulp.src( './js/experience/index.js' )
    .pipe( include() )
    .pipe( uglify() )
    .pipe( rename({
      suffix: '.min'
    }))
    .pipe( gulp.dest( './js/experience' ) )
});

gulp.task('content', function() {
  return gulp.src( './js/experience/content.js' )
    .pipe( include() )
    .pipe( uglify() )
    .pipe( rename({
      suffix: '.min'
    }))
    .pipe( gulp.dest( './js/experience' ) )
});

gulp.task( 'watch', function() {
  gulp.watch( './css/*.*', function() {
    setTimeout(function () {
      gulp.start( 'css' );
    }, 300 );
  });

	gulp.watch( './css/experienceCats/*.*', function() {
    setTimeout(function () {
      gulp.start( 'css' );
    }, 300 );
  });

	gulp.watch( './js/experience/*.*', function() {
    setTimeout(function () {
      gulp.start( 'js' );
      gulp.start( 'content' );
    }, 300 );
  });
});

gulp.task( 'default', [ 'css', 'js', 'content', 'watch' ] );
