
/*  For Https server setup

        // import https from 'https'

        // https.get('https://www.lynda.com/',res =>{
        //     console.log('Response stt code: ' ,res.statusCode);

        //     res.on('data',chunk => {
        //         console.log(chunk.toString());
        //     })
        // });

For Https server setup
*/

/*   For Http server setup

        // import http from 'http'

        // const server = http.createServer();

        // server.listen(8000);

        // server.on('request', (req,res) => {
        //     res.write('Heloo HTTP\n');
        //     setTimeout(() => {
        //         res.write('I can stream!');
        //         res.end();
        //     },10000);
        // });

*/


//For Express server setup

import express from 'express'
import fs from 'fs' 
import { error } from 'util';
import apiRouter from './api'
import sassMiddleware from 'node-sass-middleware'
import path from 'path'

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine','ejs');



server.get('/', (req,res) => {
    
    //res.send('Hello Express');
    
    // //For EJS Template
    // res.render('index');

    //For EJS Template with some content passed
    res.render('index',{
        content: "This is some <em>Content</em>!"
    });
    
});

server.use('/api',apiRouter);
server.use(express.static('public'));
    
/*     OR

server.get('/about.html', (req,res) => {
    fs.readFile('./about.html', (error,data) =>{
        res.send(data.toString());
    });
});

 */

server.listen(8080, () => {
    console.log('Express server is listeneing on the port : 8080');
})




