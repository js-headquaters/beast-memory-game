import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	build: {
		assetsDir: '.',
		assetsInlineLimit: 30000000,
		cssCodeSplit: false,
	}
});
