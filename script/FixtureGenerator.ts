import path from 'path';
import MarkdownIt from 'markdown-it';
import shell from 'shelljs';
import processMarkdown from '../src';
import { readFixtureFile, writeFixtureFile } from '../src/util';

const md = MarkdownIt();
md.use(processMarkdown);

const mdFiles = shell.ls(path.join(__dirname, '../test-fixtures/*.md'));
for (const mdFile of mdFiles) {
  const content = readFixtureFile(mdFile);
  const result = md.render(content);
  writeFixtureFile(`${mdFile}.html`, result);
}
