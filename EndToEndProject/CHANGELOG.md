This file explains how Visual Studio created the project.

The following steps were used to generate this project:
- Create project file (`EndToEndProject.esproj`).
- Create `launch.json` to enable debugging.
- Create `nuget.config` to specify location of the JavaScript Project System SDK (which is used in the first line in `EndToEndProject.esproj`).
- Install npm packages: `npm init && npm i --save-dev eslint`.
- Create `app.js`.
- Update `package.json` entry point.
- Create `eslint.config.js` to enable linting.
- Add project to solution.
- Write this file.
