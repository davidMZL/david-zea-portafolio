//Auto-import icons from assets/icons/*.svg
const modules = import.meta.glob('@/assets/icons/*.svg', { eager: true });
function getFilename(path: string) {
  return path
    .split('/')
    .pop()!
    .replace('.svg', '')
    .replace(/-([a-z])/g, (_, l) => l.toUpperCase());
}
export const iconsSvg: Record<string, string> = {};
for (const path in modules) {
  const name = getFilename(path); // ej. 'github-color' → 'githubColor'
  // @ts-ignore
  iconsSvg[name] = modules[path].default;
}


export const gifImages = {
    mouseGif: new URL('@/assets/gif/mouse-animation.gif', import.meta.url).href,
}