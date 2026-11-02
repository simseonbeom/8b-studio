import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages 주소가 /8b-studio/ 아래이므로 빌드할 때만 base를 지정한다.
  base: command === 'build' ? '/8b-studio/' : '/',
}));
