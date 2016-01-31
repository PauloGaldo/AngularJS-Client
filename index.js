/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function requireHTTPS(req, res, next) {
    if (!req.secure) {
        //FYI this should work for local development as well
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(requireHTTPS);
var express = require('express'),
app = express();
app.use(express.static(__dirname + '/public_html'));
var server = app.listen(process.env.PORT || 443);




