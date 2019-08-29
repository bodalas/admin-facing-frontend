/*
* Primary Application
*
*/

const express = require('express');
const app = express();
const port = 2500;

app.get('/',(req,res) =>{
  res.send('hello world');
});

app.listen(port);
console.log('Application listening on port '+port);
