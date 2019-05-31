import MarkdownIt from 'markdown-it';
import markdownItImgSize from '../src';
import { readFixtureFile } from '../src/util';

function testProcessingMarkdown(fixtureFileName: string) {
  const md = MarkdownIt();
  md.use(markdownItImgSize);
  const input = readFixtureFile(`fixture/${fixtureFileName}`);
  const actual = md.render(input);
  const expected = readFixtureFile(`fixture/${fixtureFileName}.html`);
  expect(actual).toEqual(expected);
}

test.skip('process w-size.md', () => {
  testProcessingMarkdown('w-size.md');
});

test.skip('process w-width.md', () => {
  testProcessingMarkdown('w-width.md');
});

test.skip('process w-height.md', () => {
  testProcessingMarkdown('w-height.md');
});

test.skip('process w-percentage.md', () => {
  testProcessingMarkdown('w-percentage.md');
});

test.skip('process w-vhvw.md', () => {
  testProcessingMarkdown('w-vhvw.md');
});

test.skip('process w-vmax.md', () => {
  testProcessingMarkdown('w-vmax.md');
});

test.skip('process w-vmin.md', () => {
  testProcessingMarkdown('w-vmin.md');
});

test.skip('process wo-size.md', () => {
  // TODO: https://github.com/image-size/image-size should be used to detect image size
  testProcessingMarkdown('wo-size.md');
});

test.skip('process w-two-images.md', () => {
  // TODO: correspond to multiple images
  testProcessingMarkdown('w-two-images.md');
});
