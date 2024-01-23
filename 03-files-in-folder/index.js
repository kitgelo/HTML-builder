const fs = require('fs');
const path = require('path');

const pathToDir = path.join(__dirname, 'secret-folder');

fs.readdir(pathToDir, { withFileTypes: true }, (err, data) => {
  console.log('\nCurrent directory files:');
  data.forEach((file) => {
    if (file.isFile()) {
      fs.stat(path.join(pathToDir, file.name).toString(), (err, stats) => {
        if (err) {
          console.log(err);
        }
        console.log(
          `${file.name.split('.')[0]} - ${file.name.split('.')[1]} - ${(
            stats.size / 1024
          )
            .toString()
            .slice(0, -7)}kb`,
        );
      });
    }
  });
});
