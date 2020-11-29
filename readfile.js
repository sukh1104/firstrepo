var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demo.html', function(err,data)
    {
        res.write(data);
        return res.end();
    });
}).listen(8080);
console.log('Listening on port 8080');