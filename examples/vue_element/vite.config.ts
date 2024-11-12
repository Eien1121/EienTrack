import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
// import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        vue(),
        UnoCSS(),
        //如果需要開啟https，启用下面的插件
        // basicSsl({
        //     name: "test",
        //     domains: ["*.custom.com"],
        //     certDir: "/Users/.../.devServer/cert",
        // }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"), // 設置 @ 別名指向 src 資料夾
        },
    },
    server: {
        host: "0.0.0.0", // 允许外部访问
    },
});
