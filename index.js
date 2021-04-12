//node.js export import
const express = require('express');


const app = express();

//object.method('string',cbfn)
//cbfn=call back function
//app.get(route,cbfn)
app.get('/', function (req, res)//actual argument 
{
    res.send('Hello antim songara  good morning...');
});

//app.get(route.cbfn)

app.get('/hello', function (req, res)//actual argument 
{
    res.send('Hello..heloo.....');
});


//app.get(route,cbfn)
app.get('/songara', function (req, res)//actual argument 
{
    res.send('Hello songara..');
});

//object.method(int)
app.listen(3000, function () {
//3000->port number
        console.log("server is running on port 3000");
});

