---
title: "Let's use Angular Console!"
date: "2019-09-16"
description: Let's check out how we can use Angular console to make our app ideas a reality
---

# Let's Use Angular Console!
#### 9/16/2019

![angular-console-social-card](images/angular-console-social-card.png)

The first steps in starting to build a new web app often involve recalling a handful of commands.  Each project has it's own unique set of components, features, and build tools.  So to get your next app idea off the ground, you have to be able to find out exactly which set of terminal or CLI (command line interface) commands to execute.

As developers, it always pays to figure out which apps and tools work best for us to be the most productive.  With constant experimentation, [keeping up](https://nathanpickard.wordpress.com/2018/06/26/how-to-improve-your-code-without-coding-part-2/) on the latest tech trends daily, and finding [the right tools](https://nathanpickard.wordpress.com/2018/02/11/tools-of-the-trade-for-the-modern-web-developer/), time is of the essence when trying to maximize productivity.  Constantly alt-tabbing through open programs or clicking through open windows can drag down overall productivity, so being mindful of your coding workspace can give you the edge you need to get all those great feature ideas completed.

As long as I can remember, I've been a big fan of applications that have great UIs (user interface).  These well laid out apps are usually ones that you find yourself using on a daily basis to do your most meaningful work.  Whether getting your app off the ground or finally deploying to production, it pays to have thoughtfully laid out tools which helps make getting your goals accomplished and keeps projects on track.  Consequently, being able to easily navigate around an app or utility with an intuitive user interface makes getting tasks done quick and easy.

Applications with great UIs are mostly used by way of the mouse.  Being able to click around and visually see how your input is processed by the app makes sense to most users.  Reaching for the mouse or touch pad is usually the first thing people do when getting work done at the computer and you could say it's become second nature to use this method of input.

![black and white business close up computer](images/pexels-photo-84763.jpeg)

Now wouldn't it be handy to not be confined to the terminal and use the mouse to execute those commands to make your app a reality?

Luckily there is an awesome utility that combines the power of the [Angular CLI](https://cli.angular.io/) with a user interface that can help make constructing Angular-based apps a better experience for beginner and experienced developers alike. This app, developed by the awesome folks at [Narwal](https://nrwl.io/), is aptly (_oh yeah_) named [Angular Console](https://angularconsole.com/).  Let's dive in, see what Angular Console is capable of, and use it to make a fun little app!

* * *

## A different angle on building Angular applications

[Angular Console](https://github.com/nrwl/angular-console) has made itself out to be the UI for the Angular CLI.  It combines the ability for developers to see visual representations of commands and tasks with the power of  the Angular CLI.  Angular Console does what the command-line version of the Angular CLI does, so that means anything you can do with the CLI, you can do with Angular Console.  Awesome!  And interesting...

Originally, the Angular Console was built as a tool for expert developers, but the creators also aimed to make it a great option for those new to Angular or its CLI.  It's provides the visual interface to create projects, run generators and commands, and install extensions all without ever touching the terminal.

Trying to remember which commands to execute with the CLI can decrease your productivity, especially when you're scaffolding your next great project idea.  Angular Console highlights the properties you are likely to use in development, so you don't have to keep referring to the [CLI documentation](https://angular.io/cli) to find the right task to implement.

This 5 minute [video](https://youtu.be/d2K2Cp8BJx0) overview from [fireship.io](https://twitter.com/fireship_dev) quickly shows what Angular Console can do for you in your current and future projects.

* * *

## Let's build!

Now that we know what the Angular Console can do, let's wield it's power to create a fun and easy to build app.  We're going to create a simple web app that displays a new Chuck Norris "fact" every time you press a "new fact" button.  After this tutorial, you'll be developing Angular-based apps that are as powerful as a Chuck Norris roundhouse kick, so throw on your best pair of kicking jeans and follow along with me!

![chuck norris kick](images/chuck-norris-kick.png)

This tutorial is going to use the following tools that most web devs should have installed and ready to use:

- [Chrome browser](https://www.google.com/chrome/)
- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/) (LTS version)
- And [Angular Console](https://angularconsole.com/) of course!

We'll be using the [Chuck Norris API](https://api.chucknorris.io) to grab our data.

While you're free to use a different code editor or browser,  the tools listed above are exactly the ones I'm going to use here in this tutorial.  Let's do it!

* * *

#### Laying the foundation

Once you have Angular Console installed for your given OS, fire it up and click on the new app button to create a new project.

![create project.png](images/create-project.png)

Next you'll be presented with a window to create your new workspace for this project

![create new project](images/create-new-project.png)

Go ahead and give a location where you'd like the project to live on your computer.  In ![parent directory](images/parent-directory.png)my case, I'm putting this project on my desktop in a folder titled "Awesome Chuck Norris app".

In the next field, type in the name of the workspace or "project name".  Let's title it "chuck-norris-facts".

![workspace name](images/workspace-name.png)

In the third field, simply check the "@schematics/angular" checkbox.  This will set up a standard Angular project with the default settings.

![schematic set](images/schematic-set.png)It's the equivalent of executing the "ng new 'whatever-app-name-here'" terminal command using the Angular CLI.

Ignore the optional schematics field.  For the purposes of this app, we don't need to delve into the [nitty gritty](https://angular.io/cli/new) of all the options Angular Console/CLI provides when creating a new project.

![creating workspace](images/creating-workspace.png)

Hit "Create" and Angular Console will spin up a brand new project for us to sink our teeth into, all without typing a single terminal command!  AC simply does it for you.  Whoa!

The integrated terminal will take a minute or so to create a new angular project.

Once the installation of our new app is ready, you'll be presented with the "Projects" page where you can see all the projects you've loaded into Angular Console.  In our case, we have the new "chuck-norris-facts" app which is the main application.

![open in vscode](images/open-in-vscode.png)

From here, go ahead and click on the "Open in..." drop-down menu in the upper right-hand corner and click on "VS Code".  This will fire up VS Code for us with the newly minted "Chuck Norris Facts" app ready to be constructed.  Now let's get to coding this thing!

\[caption id="attachment\_832" align="aligncenter" width="536"\]![opened in vs code](images/opened-in-vs-code.png) Voilá!  Here we have our freshly created app opened in VS Code!\[/caption\]

* * *

#### Creating a component

Angular applications are made up of components after all, so lets flip back to AC and click on the "generate" icon on the left-hand side and then click on the "component" option.

Next, the generate component window will open which will execute the command for creating a new component.  Here, we see the required "_name\*_" field, which will be the name for this particular component and the "_project\*_" field, which is simply the name of the main application.  (_While we won't be using the "optional fields" sections, notice how AC provides additional configuration capabilities for our projects._)

![component fields](images/component-fields.png)

Go ahead and enter "chuck-norris-fact" and "chuck-norris-facts" respectfully in the name and project fields and then hit the "Generate" button in the top right.

 

 

 

 

![component complete](images/component-complete.png)

Once the process is complete, we can see the exact command the integrated terminal executed and the files it created within our project.  Pretty slick!

 

 

Flip back over to VS Code and let's see what AC created for us.

![generated component vscode](images/generated-component-vscode.png)

If we click through to "src" then "app" folders in our application, we see our new "chuck-norris-fact" component.  Sweet!  Let's get to it and add our actually code to give this project some life.

By default, the generate component command creates four individual files inside our components folder:

- A Typescript file that will hold the business logic of the component
- An HTML file which will contain our template.
- A CSS file for component specific styling,
- And a spec file, generated in Typescript, for testing purposes

The business logic for Angular components is contained in within their respective "component.ts" files.  So, to give our app some functionality, open up the "chuck-norris-facts.component.ts" and enter/copy and paste the following code:

import { Component, OnInit } from '@angular/core';

import { FactsService } from '../facts.service';

@Component({
  selector: 'app-chuck-norris-fact',
  templateUrl: './chuck-norris-fact.component.html',
  styleUrls: \['./chuck-norris-fact.component.css'\]
})

export class ChuckNorrisFactComponent implements OnInit {

  chuckNorrisFact: any;
  constructor(private factsService: FactsService) { }

  ngOnInit() {
  }

  getFact() {
    return this.factsService.getChuckNorrisFact().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    );
  }
  handleSuccess(data) {
    this.chuckNorrisFact = data.value;
    console.log(this.chuckNorrisFact);
  }
  handleError(error) {
    console.log(error);
  }
}

Without delving each line of code and for the sake of brevity, I'll quickly go over the main parts of this file.

- The first couple lines of code import our required components for Angular components and a "FactsService" (which we will implement shortly).
- Then we have the @Component decorator which contains the metadata for this specific component.
- Next, we have our exported "ChuckNorrisFactComponent" class which contains the business logic for our component:
    - First we have our constructor which initializes our "FactsService"
    - And, then we have our 3 main methods:
        - The _getFact()_ method which calls the factsService method, _getChuckNorrisFact()_, to actually retrieve a fact from the [Chuck Norris API](https://api.chucknorris.io). 
        - The _handleSuccess()_ method, which handles the data we get back from the API if the API call successfully returned the expected data
        - And finally, the _handleError()_ method, which will log an error to the console if retrieving the right data fails.

* * *

#### Generating a Service

Next, let's create that "FactsService" mentioned above to carry out the call to the Chuck Norris API.![generate service](images/generate-service.png)

Like before, click on the "generate" icon on the left hand side of AC and then scroll down and select the "service" option.  In the following window, enter "facts" in the name field and then "chuck-norris-facts" in the project field and then hit "Generate".  And just like that, we have a "facts.service.ts" file under our "apps" folder that will hold the code for our call to the Chuck Norris API.

Pull up VS Code and enter the following code in the freshly generated "facts.service.ts" file:

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FactsService {

  constructor(private httpClient: HttpClient) { }

  getChuckNorrisFact() {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random?category=dev');
  }
}

In this file:

- We're importing the "HttpClient" component needed make our get request (in line #2)
- The "Generate service" command gives us an "@Injectable" decorator to make injecting our service into other components a breeze.
- Next, we're exporting our "FactsService" class that contains two pieces:
    - The constructor, which initializes the HttpClient component
    - And lastly, the _getChuckNorrisFact()_ method uses the httpClient get method to fetch data from '_https://api.chucknorris.io/jokes/random?category=dev_'.  Notice here that we're retrieving facts from the 'dev' category so we can display tech themed Chuck Norris facts, of course!

Now flip over to 'app.module.ts' and copy and paste the following to plug in Angular's [HttpClient](https://angular.io/guide/http) module capabilities into the project:

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChuckNorrisFactComponent } from './chuck-norris-fact/chuck-norris-fact.component';

@NgModule({
  declarations: \[
    AppComponent,
    ChuckNorrisFactComponent
  \],
  imports: \[
    BrowserModule,
    HttpClientModule
  \],
  providers: \[\],
  bootstrap: \[AppComponent\]
})
export class AppModule { }

We're almost done!  Before launching our application, let's add our templates.

![chuck norris wearing hat](images/chuck-norris-wearing-hat.png)

* * *

#### Templates to display our data

Now that we have a service to wrangle up some rather interesting, tech-themed Chuck Norris facts, let's code up the 'chuck-norris-fact-component' and 'app.component' HTML files to display this data to the world.

Switch over to 'chuck-norris-fact-component.html', delete the '<p>chuck-norris-fact works!</p>' bit, and _punch_ in the following:

![component html](images/component-html-2.png)

Thanks to Angular's [interpolation](https://angular.io/guide/template-syntax#interpolation-and-template-expressions), the 'chuckNorrisFact' in double curly braces will easily allow us to display the random Chuck Norris fact we receive in the Facts service.  We also added some in-line layout adjustments using the flex property to give our app a smidge of responsive design.  So, no matter what device the user is on, the content is centered and go to go.  Next, we added "Chuck Norris Facts" as a header for our application and a simple button that will fire the "getFact()" method we previously defined up above in the 'chuck-norris-fact-component.ts' file.

Then in 'app-component.html', go ahead and remove everything and simply replace it with:

<app-chuck-norris-fact></app-chuck-norris-fact>

This injects an instance of the 'chuck-norris-fact' component, via the selector property, into our main app component.  Our users can officially see and interact with our application now.

With the coding part complete, lets use Angular Console to check out our new application!

* * *

#### Launching our application

Our code is now in place, so let's launch "Chuck Norris Facts" and see our app in action!

Head back to AC and flip over to the main project view.  From here, click on the 'Run' button to the right of the project name, and then hit 'Serve'.

![run-serve](images/run-serve-1.png)![configuration-serve](images/configuration-serve.png)

On the next screen,  Angular Console presents us with some handy configuration options when serving up our application.  We see options for serving up a production-ready build and using [Ahead of Time](https://angular.io/guide/aot-compiler#the-ahead-of-time-aot-compiler) (aot) compilation.  For our purposes here, leave everything as-is and hit the 'Run' button.

Once AC has finished building our awesome new Chuck Norris app, we're presented with a helpful 'Summary' screen of the build results.  If everything compiled as expected, hit the 'Open App' button under the green check mark.  Angular Console will then automatically load up 'Chuck Norris Facts' on 'localhost:4200' using your default browser.

![open app](images/open-app.png)As we can see,  we have our web application deployed in the browser and ready for the end user.  Sweet!![launched app](images/launched-app.png)

And just like that, we have ourselves a fully fledged Angular application!  Awesome!  Now hit that 'Get fact' button and discover some butt-kicking, tech-themed, Chuck Norris facts!

\[caption id="attachment\_880" align="aligncenter" width="579"\]![chuck norris fact](images/chuck-norris-fact.png) Whoa, never knew that!\[/caption\]

Hit the 'Get fact' button again to display a new fact. Now you'll be a Chuck Norris trivia expert in no time!

* * *

## Conclusion

As we've seen, Angular Console provides us with an amazing set of easy to use tools and configuration options.  From spinning up a new application, to adding feature-ready components and services to an already established project, AC offers up an awesome alternative to the more traditional methods of working within the Angular ecosystem.  With updates coming with each new iteration of Angular, AC is certainly a handy tool to have at your disposal when experimenting with [new](https://blog.angular.io/tagged/release%20notes) and [upcoming](https://angular.io/guide/updating#learning-about-new-features) framework features.

I highly encourage beginners and pros alike to give Angular Console a spin in their next Angular related coding ventures.  Explore more of AC's tools and try adding [Angular Material](https://material.angular.io/) (Angular's material design component library) to Chuck Norris Facts, and update the existing 'Get fact' [button](https://material.angular.io/components/button/examples).  Or, if you're feeling up to the challenge, add [Angular Universal](https://angular.io/guide/universal) to your existing projects using Angular Console to give your apps [serverless capabilities](https://angular.io/guide/universal#why-use-server-side-rendering).

Now you have Chuck Norris level Angular skills!

#### Links:

[Chuck Norris Facts on GitHub](https://github.com/NathanPickard/chuck-norris-facts)

[Link to live site](https://d3eneqrgz26ovv.cloudfront.net/) hosted on Amazon Web Services (AWS) [S3](https://aws.amazon.com/s3/)/[Cloudfront](https://aws.amazon.com/cloudfront/)

 

![chuck norris in suit](images/chuck-norris-in-suit-1.png)

Thanks for following along!  Follow me on [Twitter](https://twitter.com/NathanPickard) and [GitHub](https://github.com/NathanPickard) and, of course, happy coding!