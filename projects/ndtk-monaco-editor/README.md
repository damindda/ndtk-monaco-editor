# ndtk Monaco Editor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## how to install using npm

```
npm install ndtk-monaco-editor
 ```
 
 
## how to add in to ypur project app.module.ts file

```
import { NdtkMonacoEditorModule } from 'ndtk-monaco-editor'
 ```
 
 
## how to add HTML template in to ypur project component.html file

```
<ndtk-monaco-editor></ndtk-monaco-editor>
 ```

## how to enable monaco instance in your angular.json project file

```
 {
      "glob": "**/*",
      "input": "node_modules/monaco-editor/min/vs",
      "output": "/vs/"
 }
 ```              
                
 example
  ```
 "assets": [
       {
          "glob": "**/*",
           "input": "node_modules/monaco-editor/min/vs",
           "output": "/vs/"
       },
           "src/favicon.ico",
           "src/assets"
              
 ]
 ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
