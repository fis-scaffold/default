// 以 html 文件作为入口，所有 html 文件以及与之关联的静态文件也会被自动编译，用了啥编译啥，所谓按需编译。
fis.set('project.index', '*.html');

// 开起 autuload, 好处是，依赖自动加载。
fis.set('modules.postpackager', fis.plugin('autoload'));

fis.match('components/**/*.js', {
  packTo: 'pkg/components.js'
});

fis.match('components/**/*.css', {
  packTo: 'pkg/components.css'
});
