

/*
 * @Author: yangchenguang
 * @Description: 
 * @Date: 2024-01-04 19:58:20
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-24 16:07:45
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// 自动导入
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    ],
    // 导入第三发
    imports: [
      // presets
      'react',
      'react-router-dom',
      // custom
      {
        // '@vueuse/core': [
        //   // named imports
        //   'useMouse', // import { useMouse } from '@vueuse/core',
        //   // alias
        //   ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
        // ],
        // 'axios': [
        //   // default imports
        //   ['default', 'axios'], // import { default as axios } from 'axios',
        // ],
        // '[package-name]': [
        //   '[import-names]',
        //   // alias
        //   ['[from]', '[alias]'],
        // ],
        'dayjs': [
          // default imports
          ['default', 'dayjs'], // import { default as axios } from 'axios',
        ],
      },
    ],
    // 自动导入目录下的模块导出
    dirs: [
      // './hooks',
      // './composables' // only root modules 仅根模块
      // './composables/**', // all nested modules 所有嵌套模块
      // ...
    ],
    // defaultExportByFilename: false, // 为目录下的默认模块导出启用按文件名自动导入
    injectAtEnd: true, // 在其他导入的末尾注入导入
    // 生成相应.d.ts文件的文件路径。
    // 当`typescript`本地安装时默认为'./auto-imports.d.ts'。
    dts: './auto-imports.d.ts',
    // 生成对应的.eslintrc-auto-import.json 文件。
    // eslint 全局文档 - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
    eslintrc: {
      enabled: false, // Default `false`
      // filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      // globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  }),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
})
