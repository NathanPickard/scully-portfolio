---
title: "Creating \"Live Music PDX\""
date: "2018-09-02"
description: Take a look into how I built Live Music PDX
---

# Creating "Live Music PDX"

There's something about seeing one of your favorite artists perform live that leaves an impression on you.  It can move you and change you while providing memories that last a lifetime.  However, trying to find upcoming live music events can oftentimes be a challenge.

With the multitude of online music services out there, finding a solid list of upcoming shows quickly can turn out to be a harder task than it probably should be.  Let's say you have a friend visiting from out of state.  You want to take them out around town and maybe explore the popular venues, so why not take them out to see a live show?  Or, you hear that one of your favorite folk bands is in town, so why not make a night of it and go out and see them live in-person?

![](images/pexels-photo-196652.jpeg)

After immersing myself in Angular code and developing Angular based apps myself, I saw the possibilities of developing a single page application to fulfill the need of an easy to use "live music finder" for the Portland metro area. Problem solving through code is a developers forte and what better way to combine my skills and experience to create a no-nonsense "live music finder" web app!

* * *

## Planning

As with any web project, a bit of thoughtful planning and some light brainstorming is necessary to successfully pull all your ideas together to eventually form one cohesive application.

![man wearing black and white stripe shirt looking at white printer papers on the wall](images/pexels-photo-212286.jpeg)

A little organization can go a long way toward keeping a project on track.  Given the ever evolving nature of web development, developers love to build cutting edge features for applications that they're excited about.  However, a project can easily go off the rails and meander in many different directions.  Therefore, I've found it best to take each feature one byte (_oh yeah_) at a time and build upon a solid foundation right from the get go.  While it is tempting and exciting to implement those newly learned reactive forms in Angular and show them off to the world, your time is better well spent building out the core features first.

So, to kick things off, I first opened a brand new board on [Trello](https://trello.com/). Next, I made individual lists divided by "To-do", "Currently doing", ''Completed", and "Stretch goals".  These lists are self explanatory, with "stretch goals" being features I can tackle at a later point in time, only after the applications requirements are fulfilled.

\[caption id="attachment\_691" align="alignnone" width="1328"\]![trello live music pdx](images/trello-live-music-pdx2.png) Trello makes managing your to-dos a breeze\[/caption\]

I also keep a note of the [user stories](https://www.mountaingoatsoftware.com/agile/user-stories) in an [Evernote](https://evernote.com/) note to make sure I'm fulfilling the objective of the project.  In keeping with [Agile practices and concepts](https://www.agilealliance.org/agile101/), these user stories help push development along and guide the application to a complete product.  While it may seem tedious to come up with some rather obvious objectives, referring back to my key user stories has only boosted my productivity.  Also, for anyone new to the project that wants to jump in and start developing, having the user stories handy offers you a quick guide to the projects key features.

\[caption id="attachment\_688" align="aligncenter" width="469"\]![evernote live-music-pdx](images/evernote-live-music-pdx1.png) (Evernote) Gotta keep the users in mind!\[/caption\]

* * *

## Tools and tech

To build "Live Music PDX", I started by coding out the core functionality using most of the tools I discussed in a [previous blog post](https://nathanpickard.wordpress.com/2018/02/11/tools-of-the-trade-for-the-modern-web-developer/).  Below is a list of the tools and tech I used to get this project off the ground, built, and happily deployed onto Amazon web services.

#### Visual Studio Code

[VS code](https://code.visualstudio.com/) is the de facto code editor where almost all of my code for various programming ventures is written and this project was no different.  VS code gets a steady stream of awesome improvements after each monthly update and offers a wealth of really nice extensions to pump up productivity.

There is one extension in particular that has aided me in this project and that is the [Angular 6 snippets](https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode) extension from Mikael Morlund.  With support for TypeScript, Angular Material, Flex Layout and ngRx, this snippets extension provides all the syntactical support you need to create any sort of Angular based projects.  With over 4.5 million downloads (at the time of this writing), this worthwhile add-on is obviously doing something right!

\[caption id="attachment\_695" align="alignnone" width="1020"\]![Angular 6 snippets extension](images/angular-6-snippets-extension.png) Extremely handy extension for Angular development - Look it up under 'extensions' in VS Code\[/caption\]

#### Angular 6 and the Angular CLI

I coded this application using the latest version of [Angular 6](https://angular.io/) and the [Angular CLI](https://cli.angular.io/) (v6.1.6 and v6.15 respectively, at the time of this writing).  Angular and it's CLI (command line interface) is my front-end framework of choice. It's loaded with awesome tooling and provides a fully fleshed out feature set and ecosystem that I've come to really enjoy working with.  ![angular](images/angular.png)The Angular CLI is incredibly powerful and really easy to spin up a new project quickly.  Also, with nice improvements and features added with every major release, Angular is only getting better from here.

#### Angular Material

To create a cohesive and responsive user interface, I went with the latest version of [Angular Material](https://material.angular.io/).  It's a UI framework that provides comprehensive and modern UI components that work well in web, mobile, and desktop environments.  I chose to go with Angular Material because it integrates seamlessly with Angular and includes uniform styling to many different UI components right out of the box.  The included [CDK](https://material.angular.io/cdk/categories) or "component dev kit" allows developers to build any number of [custom styled components](https://blog.angular.io/a-component-dev-kit-for-angular-9f06e3b4b3b4) for their own apps.

\[caption id="attachment\_698" align="alignleft" width="172"\]![angular material](images/angular-material.png) Angular Material has your styled components covered\[/caption\]

You've undoubtedly seen Angular Material in action, as it follows Google's "[Material](https://material.io/design/)" design system that is used across almost all of their products, such as Gmail and the Android ecosystem.  Having used AngularJS Material in past projects, transitioning over to the new Material framework is exciting to explore and, like Angular itself, relatively easy to get up and running.

#### Angular Flex-Layout

Having an attractive layout and intuitive interface can draw a user in or have them searching aimlessly for the login form.  Fortunately, there's a layout API that works great in conjunction with the Angular Material and that is the aptly named Angular Flex Layout API.  Based on [Flexbox CSS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), this layout pattern enables developers to build out responsive apps, no matter the given viewport size.  And with mediaQuery observables, static, and responsive APIs baked in, any display size can be properly developed for.  Tying Flex-Layout with Material offer a solid choice for devs needing a cohesive and attractive UI for their users.

#### Firebase

Data gives an application meaning and it's important that it is stored and used effectively.  For development purposes, I chose to go with Google's [Firebase](https://firebase.google.com/).

![firebase](images/firebase.png)As a comprehensive development and cloud platform, Firebase provides super easy, realtime database implementation and authentication functionality to your users.  The realtime database ships with mobile and web SDKs while remaining serverless, so you can concentrate more on the client side of things and not have to worry about backend configurations.  Firebase's [free tier](https://firebase.google.com/pricing/) offers a healthy amount of functionality and experimentation while working seamlessly across web, Android, and iOS platforms.  For a no-fuss developmental backend and database, Firebase fits the bill.

* * *

Stay tuned for my next blog post where I'll discuss building out "Live Music PDX", the decisions I made, and why I chose to go the direction I'm going.  To further watch my progress and checkout the entire codebase, shoot on over to my [Github page](https://github.com/NathanPickard) where you can find the "live-music-pdx" [repository](https://github.com/NathanPickard/live-music-pdx).

In the mean time, _code on!_