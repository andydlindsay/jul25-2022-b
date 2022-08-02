const fs = require('fs');

// fs.readFile('./data.html', { encoding: 'utf-8' }, (err, data) => {
//   // console.log('err', err); // null
//   // console.log('data', data); // data

//   if (err) {
//     console.log('something bad happened', err);
//   } else {
//     console.log('everything worked out', data.length);
//   }
// });

const syncFileContents = fs.readFileSync('./data.html', { encoding: 'utf-8' });

console.log('sync', syncFileContents);

// fs.writeFile()
