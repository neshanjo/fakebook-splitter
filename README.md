# fakebook-splitter

Splits fakebook pdf files into single files, each containing one song. 
Made possible by Adam Spiers' awsome [book indices](https://github.com/aspiers/book-indices).

## Prerequisites

Install latest [Node JS LTS version](https://nodejs.org/en/).

Install PDFtk ([Windows+Mac](https://www.pdflabs.com/tools/pdftk-server/), [Linux ](https://wiki.ubuntuusers.de/pdftk/)) and make sure that the `pdftk` command is in the PATH.

Clone this project.

Download index or just clone the repository (`git clone https://github.com/aspiers/book-indices.git`).

## Usage

Open shell in the root directory of this project.

Run `node index.js CSV-FILE PDF-FILE OUTPUT-DIRECTORY`, e.g. `node index.js ../book-indices/RealBk1.csv input/REALBK1.PDF output/RealBk1`.

Note that the output directory must exist.

Have fun! 🎶🎵
