import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { handler } from './netlify/functions/github-projects.js';

const localGitHubFunction = {
  name: 'local-github-projects-function',
  configureServer(server) {
    server.middlewares.use('/.netlify/functions/github-projects', async (request, response, next) => {
      if (request.method !== 'GET') {
        response.statusCode = 405;
        response.setHeader('Allow', 'GET');
        response.end();
        return;
      }

      try {
        const result = await handler();
        response.writeHead(result.statusCode, result.headers);
        response.end(result.body);
      } catch (error) {
        next(error);
      }
    });
  },
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (!process.env.GITHUB_TOKEN && env.GITHUB_TOKEN) {
    process.env.GITHUB_TOKEN = env.GITHUB_TOKEN;
  }

  return {
    plugins: [react(), localGitHubFunction],
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
    },
  };
});
