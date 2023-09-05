const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {
   process.stdout.write('prompt > ')
  process.stdin.on('data',(data)=>{
   const input = data.toString().trim();
    const args = input.split(' ');
    const cmd = args.shift(); 
   cmd in commands?commands[cmd](print, args.join(' ')):print(`command not found: ${cmd}`)

  })
}

const print = (output)=>{
   process.stdout.write(output)
process.stdout.write("\nprompt > ")}

bash();
module.exports = {
   print,
   bash,
};
