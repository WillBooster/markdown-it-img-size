import MarkdownIt from 'markdown-it';

const index = (md: MarkdownIt, options: any) => {
  function convertMarkdownToHtml(src: any) {
    // TODO: Add the logic here
    return src;
  }

  function replaceImgItSize(state: any, silent: any) {
    state.src = convertMarkdownToHtml(state.src);
  }

  md.inline.ruler.before('image', 'image', replaceImgItSize);
};

export = index;
