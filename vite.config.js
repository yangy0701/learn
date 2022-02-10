import { defineConfig } from 'vite'
import { resolve } from "path";

//在vite中提供对vue文件的支持
import vue from '@vitejs/plugin-vue'


function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
  plugins:[vue()],
  resolve:{
    alias:{
      "/@": pathResolve("src"),
    }
  },
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/@/style/index.scss";`
      }
    }
  },
  server: {
    open: true,
  },
})

