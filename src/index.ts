import MarkdownIt from 'markdown-it';

const index = (md: MarkdownIt, options: any) => {
  function convertMarkdownToHtml(src: any) {
    if (src[0] === '!') {
      const pattern = /([a-zA-Z0-9_\.\/\-\%]+)/g;
      const matches = src.match(pattern);
      if (matches.length == 3) {
        if (src.indexOf(`${matches[2]}:`) != -1) {
          return `<img src="${matches[1]}" alt="${matches[0]}" width="${matches[2]}" />`;
        } else if (src.indexOf(`:${matches[2]}`) != -1) {
          return `<img src="${matches[1]}" alt="${matches[0]}" height="${matches[2]}" />`;
        } else {
          return src;
        }
      } else if (matches.length == 4) {
        return `<img src="${matches[1]}" alt="${matches[0]}" width="${matches[2]}" height="${matches[3]}" />`;
      }
      return src;
    }
    return src;
  }

  function replaceImgItSize(state: any, silent: any) {
    state.src = convertMarkdownToHtml(state.src);
  }

  md.inline.ruler.after('escape', 'image', replaceImgItSize);
};

export = index;
