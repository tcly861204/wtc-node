const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const gulpSequence = require('gulp-sequence');
gulp.task('builddev',()=>{
  return watch("./src/nodeUii/**/*.js",{
    ignoreInitial: false
  },()=>{
    gulp.src("./src/nodeUii/**/*.js")
      .pipe(babel({
        babelrc:false,
        plugins:["transform-es2015-modules-commonjs"]
      }))
      .pipe(gulp.dest("build"));
  });
});




gulp.task('buildconfig',(cb)=>{
  gulp.src("./src/nodeUii/**/*.js")
    .pipe(rollup({
      format:'cjs',
      input:'./src/nodeUii/config/index.js',
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify('production')
        })
      ]
    }))
    .pipe(gulp.dest("build/"));
    // cb();
});


gulp.task('buildprod',(cb)=>{
  gulp.src("./src/nodeUii/**/*.js")
    .pipe(babel({
      babelrc:false,
      ignore:["./src/nodeUii/config/index.js"],
      plugins:["transform-es2015-modules-commonjs"]
    }))
    .pipe(gulp.dest("build"));
    // cb();
});

let _task = ["builddev"];
if(process.env.NODE_ENV=='production'){
  _task = ["buildprod"];
}
if(process.env.NODE_ENV=='config'){
  _task = ["buildconfig"];
}

gulp.task("default",_task);