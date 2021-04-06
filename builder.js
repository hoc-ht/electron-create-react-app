const uglify = require('uglify-js');
const fs = require('fs');

const files = ['electron.js', 'preload.js'];

for (let file of files) {
  const filepath = `./build/${file}`;
  if (fs.existsSync(filepath)) {
    const code = fs.readFileSync(filepath).toString('utf-8');
    const result = uglify.minify(code, {
      mangle: {
        reserved: ['require', 'export', 'module'],
        toplevel: true,
      },
      toplevel: true,
    });
    fs.writeFileSync(filepath, result.code);
  }
}

console.info('Uglify successfully\n');
