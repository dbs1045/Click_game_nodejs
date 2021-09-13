function kimlove() {
    var express = require('express');
    var app = express();

    app.get('/getname', function (req, res, next) {
        res.send('윤태환');
    });

    app.get('/getid', function (req, res, next) {
        res.send('201704017');
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
}

kimlove();