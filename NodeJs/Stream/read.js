import fs from 'fs';

const readableStream = fs.createReadStream('./files/output.txt',{
    encoding: 'utf-8',
    highWaterMark: 1024
})

readableStream.on('data',(chunk)=>{
    console.log(chunk);
})

readableStream.on('end',()=>{
    console.log('Finished reading the file.');
})