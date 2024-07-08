import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { execSync } from 'child_process';

if (process.argv.length < 4) {
  console.error("Usage: node index.js CSV-FILE PDF-FILE OUTPUT-DIRECTORY [OFFSET]");
  process.exit(1);
}

const csvInput = process.argv[2];
const pdfInput = process.argv[3];
const outputDir = process.argv[4];
const offset = process.argv[5] ? parseInt(process.argv[5]) : 0;

const songs = parse(fs.readFileSync(csvInput, "utf-8"), {
  delimiter: ",",
  columns: ["title", "begin", "end"],
  skip_empty_lines: true
});

for (let song of songs) {
  console.log(song);
  if (!song.title || !song.begin || song.title.startsWith("#") || song.title.includes("photo of")) {
    console.log("Skipped.");
    continue;
  }
  const begin = parseInt(song.begin) + offset;
  const end = song.end ? (parseInt(song.end) + offset) : begin;
  console.log(`  + extracting from page ${begin} to ${end}`);
  execSync(`pdftk "${pdfInput}" cat ${begin}-${end} output "${outputDir}/${song.title.replace(":", "_").replace("/", "_").replace("?", "_")}.pdf"`);
}