"use stict";
const fs = require("fs");
const path = require("path");

// *Using the FS module:
// *Create directory/folder named: “Students”
const student = path.join(__dirname, "student");
fs.mkdir(student, (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log("Folder created successfully");
});

// * In the Students directory, create a file named user.js
const userPath = path.join(__dirname, "student", "user.js");
fs.writeFile(userPath, "//new file created", (err) => {
	if (err) throw err;
	console.log("file created successfully");
});

// * Update the Students directory to “Names”
const names = path.join(__dirname, "Names");
fs.rename(student, names, (err) => {
    if(err) throw err;
    console.log('Folder renamed successfully');
})

// * Add your name as content to the file user.js
const newUserPath = path.join(__dirname, "Names", "user.js");
fs.writeFile(newUserPath, `const name = 'Muyiw Olayinka'`, (err) => {
    if(err) throw err;
    console.log('name updated!');
})

// * Update the file and add your age, sex, nationality, phone number and any other information about yourself
const newContent = `\nconst age = 24 \nconst nationality = Nigerian\nconst phoneNumber = 2348140352327\nconst sex = "Male"`;
fs.appendFile(newUserPath, newContent, (err) => {
    if(err) throw err;
    console.log('Profile updated!');
})

// *Update the file user.js to {your_name}.js eg daniel_adesoji.js
const newProfilePath = path.join(__dirname, "Names", "Muyiwa_Olayinka.js");
fs.rename(newUserPath, newProfilePath, (err) => {
	if (err) throw err;
	console.log("file name updated");
});

// * Read the contents from {your_name}.js. User fs.open or fs.readFile

fs.readFile(newProfilePath, (err, data) => {
    if(err) throw err;
    const newData = data.toString()
    console.log(newData);
})

// * Delete the file {your_name}.js
fs.unlink(newProfilePath, (err) => {
    if(err) throw err;
    console.log('File deleted');;
})

// Delete the directory “Names”
fs.rmdir(names, (err) => {
	if (err) throw err;
	console.log("Folder Deleted");
});
