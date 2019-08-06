var http = require('http');
var fs = require('fs');

var server = http.createServer(onRequest);

function onRequest(req,res){
    var data = '';
    var lines = [];
    // var stream = fs.createReadStream('./text.txt');
  
    // stream.on("data",function(chunk){
    // data +=chunk;
    // lines = data.trim().split('\n');

    // setInterval(() => { 
    
    //     var stream = fs.createReadStream('text.txt')
    //     stream.on('data', (chunk) => {
    //         data += chunk
    //     })
    //     stream.on('end', () => {
    //         lines = data.trim().split('\n');
    //         lines = lines.slice(lines.length-10);
    //         console.log(lines.join('\n'))

    //         res.end(lines.join('\n'));
    //     })
    //     }, 1000);
    
    
    // });

    setInterval(() => {
        var lines = [];
        var file = fs.readFileSync('text.txt', 'utf8');
        lines = file.trim().split('\n');
        var last10 = lines.slice(lines.length-10);
        // console.log(last10.join('\n'))

        res.end(last10.join('\n'));
    }, 1000)
}



server.listen(5000,() => console.log('Server listening on port 5K'));
