const fs = require('fs').promises;

async function readAndWriteAsync() {
  try {
    const data = await fs.readFile('input.txt', 'utf8');
    const upperCaseData = data.toUpperCase();
    await fs.writeFile('output.txt', upperCaseData);
    console.log('Successfully wrote to output.txt');
  } catch (err) {
    console.error('Error:', err);
  }
}

readAndWriteAsync();
