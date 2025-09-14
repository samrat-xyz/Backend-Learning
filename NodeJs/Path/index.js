import path from 'node:path';
import {fileURLToPath} from 'url';

const __fileName = fileURLToPath(import.meta.url);

console.log('Full file Name :',__fileName);

const __dirname = path.dirname(__fileName);
console.log("Directory Name",__dirname)

const __basename = path.basename(__fileName);

console.log("BaseName :",__basename)


const __extname = path.extname(__fileName)

console.log("Extension Name :",__extname)