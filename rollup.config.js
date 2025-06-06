const path = require('path')
const fs = require('fs')
const typescript = require('@rollup/plugin-typescript')
const nodeResolve = require('@rollup/plugin-node-resolve')
const peerDepsExternal = require('rollup-plugin-peer-deps-external')
const copy = require('rollup-plugin-copy')
const alias = require('@rollup/plugin-alias')
const postcss = require('rollup-plugin-postcss')
const commonjs = require('@rollup/plugin-commonjs')
const { babel } = require('@rollup/plugin-babel')

// Helper: recursively get all .ts/.tsx files in a directory
const inputDirs = ['src/Components', 'src/ComponentsV2', 'src/Services']
function getAllFiles(dir, exts = ['.ts', '.tsx']) {
  let results = []
  const list = fs.readdirSync(dir)
  list.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, exts))
    } else {
      // Chỉ lấy file .ts, .tsx làm input, loại bỏ tất cả file không phải code typescript
      if ((file.endsWith('.ts') || file.endsWith('.tsx')) && !file.endsWith('.d.ts')) {
        results.push(filePath)
      }
    }
  })
  return results
}
const inputFiles = inputDirs.flatMap((dir) => (fs.existsSync(dir) ? getAllFiles(dir).filter((f) => !f.includes('node_modules')) : []))

module.exports = {
  input: inputFiles,
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    entryFileNames: '[name].js',
    sourcemap: true
  },
  plugins: [
    alias({
      entries: [
        { find: 'component-shared/Components', replacement: path.resolve(__dirname, 'src/Components') },
        { find: 'component-shared/ComponentsV2', replacement: path.resolve(__dirname, 'src/ComponentsV2') },
        { find: 'component-shared/Services', replacement: path.resolve(__dirname, 'src/Services') }
      ]
    }),
    postcss({
      extract: false, // nhúng CSS vào JS thay vì tách ra file riêng
      inject: true, // tự động inject CSS vào <head>
      minimize: true,
      sourceMap: true,
      include: /node_modules|src/
    }),
    nodeResolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      include: ['src/**/*'],
      presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]]
    }),
    peerDepsExternal(),
    typescript({
      tsconfig: './tsconfig.json',
      exclude: ['**/*.d.ts', 'src/**/*.js', 'src/**/*.css', /node_modules/],
      declaration: true,
      declarationDir: 'dist',
      rootDir: 'src',
      emitDeclarationOnly: true
    }),
    copy({
      targets: [
        { src: 'src/Components/**/*.css', dest: 'dist/Components' },
        { src: 'src/Components/**/*.svg', dest: 'dist/Components' },
        { src: 'src/Components/**/*.d.ts', dest: 'dist/Components' },
        { src: 'src/Components/DropZone/index.d.ts', dest: 'dist/Components/DropZone' },
        { src: 'src/ComponentsV2/**/*.css', dest: 'dist/ComponentsV2' },
        { src: 'src/ComponentsV2/**/*.svg', dest: 'dist/ComponentsV2' },
        { src: 'src/ComponentsV2/**/*.d.ts', dest: 'dist/ComponentsV2' },
        { src: 'src/Services/**/*.d.ts', dest: 'dist/Services' },
        { src: 'src/types/clipboard-copy.d.ts', dest: 'dist/types' },
        { src: 'package.json', dest: 'dist' }
      ],
      flatten: true // Giữ nguyên cấu trúc thư mục
    })
  ],
  external: [
    '@faker-js/faker'
    // Thêm các package ngoài vào đây nếu cần
  ]
}
