// Write & creating file
import {writeFile} from 'node:fs';
let data = 'Node Js is Awesome';

writeFile('files/example.txt',data,'utf-8',(error)=>{
    if(error) throw error;
    console.log('Writting data to file successfull')
} )