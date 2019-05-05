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

test('process wo-size.md', () => {
  testProcessingMarkdown('wo-size.md');
});

test('process w-width.md', () => {
  testProcessingMarkdown('w-width.md');
});

test('process w-height.md', () => {
  testProcessingMarkdown('w-height.md');
});

test('process w-percentage.md', () => {
  testProcessingMarkdown('w-size.md');
});

test('process w-size.md', () => {
  testProcessingMarkdown('w-size.md');
});
