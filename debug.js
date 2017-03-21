const fs = require('fs');

exports.debug = (data, status) => {
  // Timestamp
  const time = new Date() + '\n';

  // colors
  const red = '\x1B[31m';
  const cyan = '\x1b[36m';
  const green = '\x1b[32m';

  // if status is not successful
  if (status !== 'Successful') {
    var data = cyan + time + red + status + data;
  } else {
    data = cyan + time + data + ': ' + green + status;
  }

  if (process.env.DEBUG === 'true') {
    // create log file
    console.log(data, (err) => {   //<---Flavio Code
      if (err) {
        return console.log(err);
      }
    });
    console.log(data);
  }
};

//Start Flavio Code
exports.verNumberInc = (currentVersionNumber, change) => {
  const versionArray = currentVersionNumber.split('.');

  for(let versionIndex in versionArray) {
    versionArray[versionIndex] = parseInt(versionArray[versionIndex]);
  }

  if(change === 'major') {
      versionArray[0] += 1;
      versionArray[1] = 0;
      versionArray[2] = 0;
    } else if(change === 'minor') {
      versionArray[1] += 1;
      versionArray[2] = 0;
    } else if(change === 'patch') {
      versionArray[2] += 1;
    }

    return versionArray.join('.');
}
//End Flavio Code
