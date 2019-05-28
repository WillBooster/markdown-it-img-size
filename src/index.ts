import MarkdownIt from 'markdown-it';

const index = (md: MarkdownIt, options: any) => {
  function convertMarkdownToHtml(src: any) {
    if (src[0] === '!') {
      const pattern = /([a-zA-Z0-9_\.\/\-]+)/g;
      const matches = src.match(pattern);
      const line: string = `<img src="${matches[1]}" alt="${matches[0]}" width="${matches[2]}" height="${
        matches[3]
      }" /></p>`;
      console.log(line);
      return line;
    } else {
      return src;
    }
  }

  function replaceImgItSize(state: any, silent: any) {
    state.src = convertMarkdownToHtml(state.src);
  }

  md.inline.ruler.after('escape', 'image', replaceImgItSize);
};

export = index;
