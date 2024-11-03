##Basic Usage
After unzipping the file, you'll find the HTML and CSS files located in the dist directory. 
To preview, simply open the index.html file in your web browser.

##Advanced Usage
If you would like to work with the source files of the page, please follow these steps after unzipping:

Navigate to the root directory.
Run npm install to install the necessary dependencies.
Use npm start to launch a live preview of the page in your default browser. 
This command will also watch for changes in core page files and automatically reload the browser when changes are saved.
You can refer to the package.json file included in the zip to see the available scripts.

##npm Scripts
	npm run build - Compiles the project, generating assets, HTML, JS, and CSS into the dist directory.
	npm run build:assets - Copies files from the src/assets/ directory into dist.
	npm run build:scripts - Compiles the src/js/scripts.js file into dist.
	npm run build:scss - Compiles SCSS files from the src/scss/ directory into dist.
	npm run clean - Deletes the dist directory in preparation for rebuilding the project.
	npm run start:debug - Runs the project in debug mode.
	npm start or npm run start - Launches the project with a live preview in your default browser and 
	watches for changes in the src directory.

##Important: You must have npm installed in order to use this build environment.

##Note: Some fonts have been replaced with Google alternatives due to licensing reasons.

