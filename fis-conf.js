// 以 html 文件作为入口，所有 html 文件以及与之关联的静态文件也会被自动编译，用了啥编译啥，所谓按需编译。
fis.set('project.files', '*.html');

// default settings
fis
  .media('dev')
  .match('**', {
    useHash: false,
    useDomain: false
  });

// fis release --media production
fis
  .media('production')
  .match('*.js', {
    optimizer: fis.plugin('uglify-js')
  })
  .match('*.css', {
    optimizer: fis.plugin('clean-css')
  })
  .match('*.png', {
    optimizer: fis.plugin('png-compressor')
  });

// 开启 autuload, 好处是，依赖自动加载。
fis.set('modules.postpackager', fis.plugin('autoload'));

fis.match('/components/**/*.js', {
  packTo: '/pkg/components.js'
});

fis.match('/components/**/*.css', {
  packTo: '/pkg/components.css'
});
