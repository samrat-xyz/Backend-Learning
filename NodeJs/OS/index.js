import os from 'node:os';

console.log("Node.js Architecture:", process.arch);
console.log("OS total RAM (GB):", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Free RAM (GB):", (os.freemem() / (1024 ** 3)).toFixed(2));
