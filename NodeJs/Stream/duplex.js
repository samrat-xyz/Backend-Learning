import { Duplex } from 'stream';

const duplexStream = new Duplex({
    write(chunk,encoding,callback){
        console.log(chunk.toString());
        callback();
    },
    read(){
        this.push('hello');
        this.push(null);
    }
})

duplexStream.on('data',(chunk)=>{
    console.log(chunk.toString());
})

duplexStream.write('world');
duplexStream.end();