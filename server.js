var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello World!)
})

app.get('/:date', function(req, res) {
    var input = req.params.date
    
    /*function dpad(val) {
        return val < 10 ? "0" + val : val 
    }*/
    function isDate(val) {
    var d = new Date(val);
    if (!isNaN(d)) {
        return {
            unixdate: d.valueOf(),
            readabledate: /*dpad(d.getMonth()+1) + "-" + dpad(d.getDate()) + "-" + dpad(d.getFullYear()) + "fulldate" + */d.toDateString().slice(4,15)
        }
    } else {
        return false
    }
}
    res.send(isDate(input))
       
})

app.listen(8080, function() {
    console.log('Listening on port 8080')
})