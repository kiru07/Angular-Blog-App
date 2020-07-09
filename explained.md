# Angular Intro - Session 01 by 99x

### Pre-requisites

* Node.js - LTS
* VS Code
* Angular CLI (install globally)

        npm install -g @angular/cli

### Create angular project

    ng new my-blog-site --routing --style scss

* New angular project with *routing* preconfigured and using *scss* for styling.

### Launch development server

    ng serve

*  Builds the project and launches the server on *localhost:4200*.

### Install Bootstrap CSS for styling

    npm install bootstrap

### Components

* Angular follows a component based architecture.
  - Eg: Header, Footer, Sidebar etc. can be individual components
  - Each link in a sidebar can be a seperate component as well
  - What consists of a component is upto you to decide (ie: how far you want to break down any section)

* Make a component called *blogs* using angular-cli. It will represent the main section containing all the *blog* cards

        ng generate component blogs

        # Or use shortcut:
        ng g c blogs

  - This creates a directory called *blogs* inside the *app* directory

  - Angular cli will generate the necessary files and directories(it's taking care of structuring your project)