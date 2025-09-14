// Reading file
import {readFile} from 'node:fs';

readFile('files/example.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log(data)
})

// Write & creating file
import {writeFile} from 'node:fs';
let data = 'I am not writting code . I am writting my future';

writeFile('files/example.txt',data,'utf-8',(error)=>{
    if(error) throw error;
    console.log('Writting data to file successfull')
} )