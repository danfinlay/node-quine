var test = require('tape')
var fs = require('fs')
var exec = require('child_process').exec

var source = fs.readFileSync(__dirname +  '/index.js').toString()

test('index.js is a quine', function(t) {
  t.plan(1)


  exec('node index.js', function(err, stdout, stderr) {
    t.equal(stdout, source)
  })
})
