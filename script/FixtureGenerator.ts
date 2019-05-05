import MarkdownIt from 'markdown-it';
import processMarkdown from '../src';
import { readFixtureFile, writeFixtureFile } from '../src/util';
import shell from 'shelljs';
import path from 'path';

const md = MarkdownIt();
md.use(processMarkdown);

const mdFiles = shell.ls(path.join(__dirname, '../fixture/*.md'));
for (const mdFile of mdFiles) {
  const content = readFixtureFile(mdFile);
  const result = md.render(content);
  writeFixtureFile(`${mdFile}.html`, result);
}
