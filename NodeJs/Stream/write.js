import fs from 'fs';

const writeableStream = fs.createWriteStream('./files/output3.txt');


writeableStream.write('Hello, this is the first line.\n');
writeableStream.write('And this is the second line.\n');
writeableStream.write('Finally, this is the third line.\n');

writeableStream.end('This is the end of the file.\n');

writeableStream.on('finish',()=>{
    console.log('All writes are now complete.');
})