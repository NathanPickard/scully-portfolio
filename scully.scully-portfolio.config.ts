import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-portfolio",
  outDir: './dist/static',
  routes: {
    '/portfolio/:title': {
      type: 'contentFolder',
      title: {
        folder: "./portfolio"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};