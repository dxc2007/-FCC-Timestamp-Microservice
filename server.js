var express = require('express')
var app = express()
var path = require('path')

var port = process.env.PORT || 8080

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'templates')))

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/:date', function(req, res) {
    var input = req.params.date
    if (/[a-zA-Z,:-]/.test(input) == false) {
        input = +req.params.date
    }
    console.log(input)
    
    function isDate(val) {
    var d = new Date(val);
    console.log(d)
    if (!isNaN(d.getTime())) {
        return {
            unixdate: d.getTime(),
            natural: d.toDateString().slice(4,15)
        }
    } else {
        return {
            unixdate: null,
            natural: null
        }
    }
}
    res.send(isDate(input))
       
})

app.listen(port, function() {
    console.log('Listening on port: ' + port)
})
