const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.get('', (req, res)=>{
    res.sendFile(publicPath+"/index.html");
})

app.get('/about-me', (req, res)=>{
    res.sendFile(publicPath+"/about.html");
})

app.get('*', (req, res)=>{
    res.sendFile(publicPath+"/404.html");
})
//app.use(express.static(publicPath));


app.listen(3000);