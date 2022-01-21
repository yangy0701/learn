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
      "/@/": pathResolve("src"),
    }
  },
  server: {
    open: true,
  },
})

