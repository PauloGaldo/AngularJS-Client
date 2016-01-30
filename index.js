/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express'),
app = express();

app.use(express.static(__dirname + '/public_html'));
app.get('/', function(req, res) {
    res.redirect('index.html')
});
app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://mypreferreddomain.com'+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
})

var server = app.listen(process.env.PORT || 80);

