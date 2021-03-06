#!/usr/bin/env node
//var debug = require('debug')('softelo');
var app = require('../app');

var port;

process.argv.forEach(function (val, index, array) {
    if (!isNaN(val)) {
        console.log('starting on port: ' + val);
        port = val;
    }
});

if(!port){
//    console.log('Specify port');
//    return;
    port = 3000;
}

app.set('port', port);

//app.set('port', process.env.PORT || port);

var server = app.listen(app.get('port'), function () {
//    debug('Express server listening on port ' + server.address().port);
   console.log('Server started on port ' + app.get('port'));
});