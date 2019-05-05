import MarkdownIt from 'markdown-it';
import processMarkdown from '../src';
import { readFixtureFile } from '../src/util';

test('process basic.md', () => {
  const md = MarkdownIt();
  md.use(processMarkdown);
  const input = readFixtureFile('test_fixture/basic.md');
  const actual = md.render(input);
  const expected = readFixtureFile('test_fixture/basic.md.html');
  expect(actual).toEqual(expected);
});
