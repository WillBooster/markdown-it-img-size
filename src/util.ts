import { readFileSync, writeFileSync } from 'fs';

export function readFixtureFile(path: string): string {
  return readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
}

export function writeFixtureFile(path: string, data: string): void {
  writeFileSync(path, data, 'utf8');
}
