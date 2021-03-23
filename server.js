var http = require('http');
var handleRequest = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  var url = req.url;
 if(url ==='/about'){
  res.write(JSON.stringify({ message: "About Page" ,localTime:(new Date().toLocaleString())}));
    res.end(); //end the response
 }else if(url ==='/contact'){
  res.write(JSON.stringify({ message: "Contact Page" ,localTime:(new Date().toLocaleString())}));
    res.end(); //end the response
 }else{
    res.write(JSON.stringify({ message: "Hello World" ,localTime:(new Date().toLocaleString())}));
    //res.write(JSON.stringify(new Date().toLocaleDateString())); 
    res.end(); //end the response
 }
}

var www = http.createServer(handleRequest);
www.listen(8080);
