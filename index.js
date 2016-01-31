/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public_html'));
app.get('/', function(req, res) {
    res.redirect('https://')
});

var server = app.listen(process.env.PORT || 443);





