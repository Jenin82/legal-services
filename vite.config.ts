import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa"; 

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            manifest: {
                name: "Your App Name",
                short_name: "AppName",
                description: "Your app description",
                display: "standalone",
                background_color: "#ffffff",
                theme_color: "#000000",
                icons: [
                    {
                        src: "/path/to/your/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/path/to/your/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
            workbox: {
                swDest: "sw.js",
            },
        }),
    ],
});