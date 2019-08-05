var http = require('http');
var fs = require('fs');

var server = http.createServer(onRequest);

function onRequest(req,res){
    var stream = fs.createReadStream('./text.txt');
    var data = '';
    var lines = [];
    stream.on("data",function(chunk){
    data +=chunk;
    lines = data.trim().split('\n');
    
    lines = lines.slice(lines.length-10);
    res.write(lines.join('\n'));
    res.end();
    });
}
server.listen(5000,() => console.log('Server listening on port 5K'));
