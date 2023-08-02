'use strict'
const path = require('path');
const os = require('os');
const process = require('process');

// Write a program to do the following using, path, os and process modules:
// Print out the current working directory
console.log('Current working directory', __dirname);

// Print out the separator of a given file path
console.log(path.sep);

// Print out the extension name of a file path
console.log(path.extname('app.js'));

// Print out the process id of the current running process
console.log(process.pid);
// Print out the user information of the os
console.log(os.userInfo());

// Print out the platform of an operating system
console.log(os.platform());



