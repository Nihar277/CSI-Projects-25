const fs = require('fs');

function readAndWriteCallback() {
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading input file:', err);
      return;
    }

    const upperCaseData = data.toUpperCase();

    fs.writeFile('output.txt', upperCaseData, (err) => {
      if (err) {
        console.error('Error writing output file:', err);
        return;
      }

      console.log('Successfully wrote to output.txt');
    });
  });
}

readAndWriteCallback();
