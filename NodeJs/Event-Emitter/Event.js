import EventEmitter from 'events';

const event = new EventEmitter();


event.on('start',(name)=>{
    console.log(`Event Started by ${name}`);
})

event.emit('start','Samrat');