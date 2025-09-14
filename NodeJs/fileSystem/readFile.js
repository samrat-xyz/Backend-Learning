// Reading file
import {readFile} from 'node:fs';

readFile('files/example.txt','utf-8',(error,data)=>{
    if(error) throw error;
    console.log(data)
})

