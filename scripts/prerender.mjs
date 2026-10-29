// Writes the rendered page into dist/index.html so visitors and search engines get the
// content before the JavaScript loads. Runs after `vite build` and the SSR build.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const htmlPath = resolve('dist/index.html');
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href);

const html = await readFile(htmlPath, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('No se encontró <div id="root"></div> en dist/index.html');

await writeFile(htmlPath, html.replace(marker, `<div id="root">${render()}</div>`));
await rm('dist-ssr', { recursive: true, force: true });
console.log('Prerender listo: dist/index.html');
