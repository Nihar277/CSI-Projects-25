const fs = require('fs');

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

function writeFilePromise(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function readAndWritePromise() {
  readFilePromise('input.txt')
    .then((data) => {
      const upperCaseData = data.toUpperCase();
      return writeFilePromise('output.txt', upperCaseData);
    })
    .then(() => {
      console.log('Successfully wrote to output.txt');
    })
    .catch((err) => {
      console.error('Error:', err);
    });
}

readAndWritePromise();
