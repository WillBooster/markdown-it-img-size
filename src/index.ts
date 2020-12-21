import path from 'path';

import { imageSize } from 'image-size';
import MarkdownIt from 'markdown-it';
import StateCore from 'markdown-it/lib/rules_core/state_core';

const index = (md: MarkdownIt): void => {
  const imgRegex = /!\s*\[\s*([^\]]+)\s*\]\s*\(\s*([^)]+)\s*\)/g;
  const fileAndSizeRegex = /([^=\s]+)\s*=([^:]*):([^:]*)/;

  function convertMarkdownToHtml(src: string): string {
    return src.replace(imgRegex, (substr: string, alt: string, img: string) => {
      const fileAndSizeMatch = img.match(fileAndSizeRegex);

      if (!fileAndSizeMatch) {
        const dimensions = imageSize(path.resolve(img));
        return `<img src="${img}" alt="${alt}" width="${dimensions.width}" height="${dimensions.height}" />`;
      }

      const [, file, width, height] = fileAndSizeMatch;
      const widthAttr = width ? ` width="${width}"` : '';
      const heightAttr = height ? ` height="${height}"` : '';
      return `<img src="${file}" alt="${alt}"${widthAttr}${heightAttr} />`;
    });
  }

  function replaceImgItSize(state: StateCore): boolean {
    state.src = convertMarkdownToHtml(state.src);
    return true;
  }

  md.core.ruler.before('normalize', 'image', replaceImgItSize);
};

export default index;
