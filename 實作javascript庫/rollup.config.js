import path from 'path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser'; 
const pathResolve = p => path.resolve(__dirname, p)
export default{
    input :'./src/index.js',
    output:[
        {
            file: 'dist/index-es.js',
            format: 'es',
            name: 'E$' // 指定檔名稱            
        }, {
            file: 'dist/index.js',
            format: 'umd',
            name: 'E$'// 指定檔名稱
        },
        {
            file: 'dist/index-cjs.js',
            format: 'cjs',
            name: 'E$'// 指定檔名稱
        }
    ],
    plugins:[
        resolve(),
        babel({
            exclude: '**/node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env']
        }),
        terser()
    ]
}