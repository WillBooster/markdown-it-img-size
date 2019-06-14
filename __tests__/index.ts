import MarkdownIt from 'markdown-it';
import markdownItImgSize from '../src';
import { readFixtureFile } from '../src/util';

function testProcessingMarkdown(fixtureFileName: string) {
  const md = MarkdownIt({ html: true });
  md.use(markdownItImgSize);
  md.set.prototype.dir = `${process.cwd()}/test-fixtures/`;
  const input = readFixtureFile(`test-fixtures/${fixtureFileName}`);
  const actual = md.render(input);
  const expected = readFixtureFile(`test-fixtures/${fixtureFileName}.html`);
  expect(actual).toEqual(expected);
}

test('process w-size.md', () => {
  testProcessingMarkdown('w-size.md');
});

test('process w-width.md', () => {
  testProcessingMarkdown('w-width.md');
});

test('process w-height.md', () => {
  testProcessingMarkdown('w-height.md');
});

test('process w-percentage.md', () => {
  testProcessingMarkdown('w-percentage.md');
});

test('process w-vhvw.md', () => {
  testProcessingMarkdown('w-vhvw.md');
});

test('process w-vmax.md', () => {
  testProcessingMarkdown('w-vmax.md');
});

test('process w-vmin.md', () => {
  testProcessingMarkdown('w-vmin.md');
});

test('process wo-size.md', () => {
  testProcessingMarkdown('wo-size.md');
});

test('process images-2.md', () => {
  testProcessingMarkdown('images-2.md');
});

test('process images-3.md', () => {
  testProcessingMarkdown('images-3.md');
});
