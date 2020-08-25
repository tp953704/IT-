const path = require('path');

export default {
    input: './src/index.js',
    output: [{
        file: './rollup/index-cjs.js',
        format: 'umd',
        banner: '// welcome to imooc.com',
        footer: '// powered by sam'
    }, {
        file: './rollup/index-es.js',
        format: 'es',
        banner: '// welcome to imooc.com',
        footer: '// powered by sam'
    }]
}