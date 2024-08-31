import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "./",
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:5000", // Backend server URL
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""), // Optional, depending on your backend setup
			},
		},
	},
});
