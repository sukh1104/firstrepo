var fs = require('fs');
const { exception } = require('console');
fs. writeFile('myfile.txt', 'Work Hard.\n', function(err){
    if(err) throw err;
    console.log('Saved into file');
});