var fs = require('fs')
fs.appendFile('./public/data.txt', '123', 'utf8', function(error){ 
  console.log('write end');
}); 