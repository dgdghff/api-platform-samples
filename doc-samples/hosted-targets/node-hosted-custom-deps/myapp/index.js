var express = require('express')
const sayHello = require('say-hi')
var app = express()

app.get('/', function (req, res) {
  res.json({ hi: "Hi World! Hi Mundo! Hi le monde!" })
})

app.get('/hi/:language', function (req, res) {
  var language = req.params.language
  var message = "This is how you say hi in " + language + ": "
  switch (language.toLowerCase()) {
    case 'spanish':
      message += sayHi.spanish()
      break
    case 'french':
      message += sayHi.french()
      break
    case 'english':
      message += sayHi.english()
      break
    default:
      message = "Sorry, unable say hi in the language: " + language
  }
  res.json({ hi: message })
})

var server = app.listen(process.env.PORT || 9000, function () {
    console.log('Listening on port %d', server.address().port)
})
