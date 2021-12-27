const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
app.set('view engine', 'ejs');

app.get('', (req, res)=>{
    res.sendFile(publicPath+"/index.html");
})

app.get('/about-me', (req, res)=>{
    res.sendFile(publicPath+"/about.html");
})

app.get('/profile', (req, res)=>{
    const user = {
        name: "Suvash Kumar",
        email: "suvashkumarsumon@yahoo.com",
        team: "Tech team, Tinkers Ltd"
    }
    res.render('profile', {user});
})

app.get('*', (req, res)=>{
    res.sendFile(publicPath+"/404.html");
})
//app.use(express.static(publicPath));


app.listen(3000);