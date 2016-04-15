var sass = require('node-sass');
sass.render({
  file: 'app.scss'
}, function(err, result) {
  console.log('err', err);
  console.log('result', result.css.toString());
});
// // OR
// var result = sass.renderSync({
//   data: scss_content
//   [, options..]
// });
