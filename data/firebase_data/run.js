fs = require('fs');
file="data.json";
fs.readFile(file, 'utf8', function(err,data){
	encodedData = JSON.stringify(data);
	fs.writeFileSync("JSON.json", encodedData);
	console.log(encodedData);
});
