//Auto-import icons from assets/icons/*.svg
const modules = import.meta.glob<{ default: string }>('@/assets/icons/*.svg', { eager: true });
function getFilename(path: string) {
  return path
    .split('/')
    .pop()!
    .replace('.svg', '')
    .replace(/-([a-z])/g, (_, l) => l.toUpperCase());
}
export const iconsSvg: Record<string, string> = {};
for (const [path, module] of Object.entries(modules)) {
  iconsSvg[getFilename(path)] = module.default; // ej. 'github-color' → 'githubColor'
}


export const gifImages = {
    mouseGif: new URL('@/assets/gif/mouse-animation.gif', import.meta.url).href,
}