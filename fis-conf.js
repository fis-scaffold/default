// fis.match('components/**.js', {
//   isMod: true
// });

// 开起 autuload, 好处是，依赖自动加载。
fis.config.set('modules.postpackager', fis.plugin('autoload'));

fis.match('components/**/*.js', {
  packTo: 'pkg/components.js'
});

fis.match('components/**/*.css', {
  packTo: 'pkg/components.css'
});
