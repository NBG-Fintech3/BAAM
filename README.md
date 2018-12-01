# Technical Information
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.
Angular cli version was updated to 7.0.3

<!-- 
## Installation
(the following should be run once)
 1. Install node js from [here](https://nodejs.org/en/download)
 2. Run as admin globaly `npm install npm@latest -g`  
 3. Run as admin globaly `npm install @angular/cli -g`  
 4. Run as admin globaly `npm install rimraf -g`  
 5. Run as admin globaly `npm cache clean -f` 
 6. Install Visual Studio Code from [here](https://code.visualstudio.com) 
 7. Install the `Project Snippets` extension and reload Visual Studio Code
 8. Open Project with Visual Studio Code (File > Open Folder...)
 9. Open terminal and run `npm install`


## Run
 1. Open Project with Visual Studio Code (File > Open Folder...)
 2. Open terminal ( Ctrl + ` )
 3. Run `npm start` and automatically the browser will navigate to `http://localhost:5000`


# Deploy to Web App with Azure
### Using VS Code `Node Pack for Azure` extension
1. Make sure the project is installed
2. Open terminal and run `npm run build`
3. Make sure the `Node Pack for Azure` extension is installed
4. Open Azure extention tab
5. Make sure you are connected to Azure
6. Select the app service where you want to deploy this app
7. Right click and select `Deploy`
8. Select 'Browse' and select the `dist` folder you just created (from file explorer) using the search bar that appears at the top of the Visual Studio Code window

### Using Azure  
1. Browse to [Azure Portal](https://portal.azure.com/) 
2. Switch to the correct directory (top right of the page)
3. Open 'baamdev' App Service
4. Open 'App Service Editor (Preview)' and click 'Go'
5. Manage your app's files in the 'WWWROOT' folder
6. Upload only files from dist folder
7. You do not need to upload scss files



# Actions
## When package.json is changed
 1. Open Project with Visual Studio Code (File > Open Folder...)
 2. Open terminal and run `rimraf node_modules`  
 3. Open terminal and run `npm cache clean -f`  
 4. Open terminal and run `npm install` 


## When Angular CLI needs update
To update Angular CLI to a new version, you must update both the global package and your project's local package.  

### Global package:  
 1. Run as admin globaly `npm uninstall -g @angular/cli`  
 2. Run as admin globaly `npm cache clean -f`  
 3. Run as admin globaly `npm install -g @angular/cli@latest`  

### Local project package:  
 1. Open Project with Visual Studio Code (File > Open Folder...)
 2. Open terminal and run `rimraf node_modules dist`    
 3. Open terminal and run `npm install --save-dev @angular/cli@latest`  
 4. Open terminal and run `npm install`   



# Angular CLI Commands
 1. When you run an angular cli command you should use the flag `-d` for testing the result.  
 2. When you are sure that the result of the command is correct, then remove the `-d` flag.

### Create Module
`ng g m name -d`  
If you want the module to have routing add the flag `--routing`

### Create Component
`ng g c folderOfModule/name --spec true -d`  
If you don't want the component to have it's own folder add the flag `--flat`   
If you don't want the component to have a scss file add the flag `--is`  

### Create Service
`ng g s core/providers/services/name --spec true -d`  

### Create Guard
`ng g g core/providers/guards/name --spec true -d`  

### Create Factory
`ng g s core/providers/factories/nameFactory --spec true -d`  
You have to delete the word Service from the class name, but not from the file name.

### Create Utility
`ng g s core/providers/utilities/nameUtility --spec true -d`  
You have to delete the word Service from the class name, but not from the file name.

### Create Pipe
`ng g p common/pipes/name --spec true -d`  

### Create Interface
`ng g i core/interfaces/name -d`  

### Create Class
`ng g cl core/classes/name -d`  

### Create Enum
`ng g e core/enums/name -d`  

 -->
