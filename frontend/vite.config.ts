import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const endpoint = loadEnv(mode, process.cwd()).VITE_API_ENDPOINT;
    return {
        plugins: [react()],
        server: {
            proxy: {
                "/api": {
                    target: endpoint,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
    };
});
