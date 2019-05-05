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

test.skip('process wo-size.md', () => {
  testProcessingMarkdown('wo-size.md');
});

test.skip('process w-width.md', () => {
  testProcessingMarkdown('w-width.md');
});

test.skip('process w-height.md', () => {
  testProcessingMarkdown('w-height.md');
});

test.skip('process w-percentage.md', () => {
  testProcessingMarkdown('w-size.md');
});

test.skip('process w-size.md', () => {
  testProcessingMarkdown('w-size.md');
});
