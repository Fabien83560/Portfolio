const critical = require('critical');

critical.generate({
  base: 'build/',
  src: 'index.html',
  target: {
    html: 'index.html',
    css: 'critical.css',
  },
  width: 1300,
  height: 900,
  inline: true,
});