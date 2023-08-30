const fs = require('fs');
const http = require('http');

///////////////////////////// FILES //////////////////////////////
//***************************** READING AND WRITING FILES *****************************//

//***************************** Blocking, synchronous code ******************************//
//reading
// const txtIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(txtIn)

//writing
// const txtOut = `This is what we know about the avocado: ${txtIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt', txtOut);
// console.log("File written!")

//***************************** Non-blocking, asynchronous way *************************//
//reading
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) => {

//     if (err) return console.log('ERROR! 💥');

//     fs.readFile(`./starter/txt/${data}.txt`, 'utf-8', (err, data1) => {
//         console.log(data1);
//         fs.readFile(`./starter/txt/append.txt`, 'utf-8', (err, data2) => {
//             console.log(data2);

//             fs.writeFile('./starter/txt/final.txt', `${data1}\n${data2}`, 'utf-8', err => {
//                 console.log('Your fie has been written 😊');
//             });
//         });
//     });
// });
// console.log("File is being read!");

///////////////////////////////// SERVERS /////////////////////////////
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request on port 8000');
})