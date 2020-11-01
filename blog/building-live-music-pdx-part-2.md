---
title: "Building \"Live Music PDX\" - Part II"
date: "2018-12-19"
description: Part 2 of how I've developed "Live Music PDX"
---

# Building "Live Music PDX" - Part II
#### 12/19/2018

There's something magical about seeing one of your favorite musical artists perform live.  After listening to their albums countless times over and finally seeing that artist reproduce those songs in person, can be an unforgettable event.  Likewise,  successfully building a brand new web app can have the same effect.  Hammering out new features, constructing a solid code base, and putting your skills to the test to build an awesome application as a result, can also be a magical experience.

![under construction signage on laptop keyboard](images/pexels-photo-211122.jpeg)

Live music and coding are two passions that have combined beautifully into my live music finder for the Portland, OR area.  In continuation of the [previous blog post](https://nathanpickard.wordpress.com/2018/09/02/creating-live-music-pdx/), this entry will explore how I'm building out ["Live Music PDX"](https://github.com/NathanPickard/live-music-pdx), the why behind the tools being used, and some of the decisions made while executing this full-stack enabled application.

I believe every developer should have a "why" for going the direction they chose.  Getting a glimpse into how other software engineers goes forth with their plan of attack can only inspire you to refine your own.  So, my goal for this second post is to give you a peek into what my own development process is and how I put my own personal spin on problem solving, learning new tech, and deploying fine web applications.  At the time of this writing, the application is under constant and continuous development ([CI/CD](https://www.infoworld.com/article/3271126/ci-cd/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html), more technically speaking).  Tune in below!

* * *

## Building core functionality

When starting work on a new project, developers are faced with an ever growing amount of frameworks to build out their apps.  Knowing exactly what you want to accomplish with your project and the problems you want to solve can help you navigate the numerous, but [quality](https://raygun.com/blog/popular-javascript-frameworks/), frameworks out there.  While constructing a web application from scratch comes with it's pros and cons, just sticking with a few solid tools can do some of the heavy-lifting and enable you to conjure up the scaffolding of quality apps with relative ease.![people having a concert](images/pexels-photo-1190297.jpeg)

[Angular](https://angular.io) has become my front end framework of choice which has enabled me to build out comprehensive feature sets in the applications I construct.  Having a fully integrated ecosystem within the bounds of the Angular framework provides a solid space to build full feature apps.  For example, taking the guess work out of which library (not to mention which version) to use to implement routing makes developing these essential features much easier.  Simply importing the Router Module, which includes most of the tools necessary for proper routing, is all that is required.  In addition, Angular has full support for [typescript](https://www.typescriptlang.org/) to get all the "type" goodness that is provided with versions of Angular 2 and up out of the box.

Modules and their respective components are the name of the game in building Angular apps.  So to get the project off the ground, I divided the application into five, easy to conceptualize, main modules: the Artist, Venue, Core, Auth, and Shared modules.

The reason for these separate, but interconnected, modules is to have a clear separation of concerns between the different aspects of the application.  Finding live music events in the Portland, OR area is the central purpose of the app, so I wanted pertinent live music information front and center, in addition to an intuitive way for users to keep tabs on whichever artists or venues they wanted to track.  Navigating the application and it's features should be clear to the user and therefore, a certain amount of compartmentalization goes a long way in keeping things nicely structured.

\[caption id="attachment\_762" align="alignright" width="223"\]![live-music-pdx-vs-code](images/live-music-pdx-vs-code.png) Every module has a home\[/caption\]

I decided then that each module should have their own respective components that would make developing specific features easier to work with.  For example, I've implemented a sub-component feature that lets the user lookup similar artists compared to the one they are currently searching for.  Though many of the feature sets share similarly built code, having this separations of concerns makes debugging easier while [CD/CI processes](https://dzone.com/articles/the-fundamental-methods-necessary-for-cdci-success) are being used.  Most importantly, successful dividing up the application's functionality into clearly defined components, more easily results in users interacting with data in a meaningful way and have a more fulfilling experience.  You wouldn't want users haphazardly doing things within the app that aren't intended, such as looking up venues when they're trying to search for that supporting act they saw last night.

Starting with the "core" module and it's components, I developed the homepage and header features to serve as the base of the application that provides a central connection point between the feature modules.   The landing page contained in the home component greets the user right away with upcoming live music events.  From the get-go, I wanted users to instantly see the latest upcoming shows within the Portland metro area.  To create a user interface (UI) that is simple to understand and easy to navigate, I experimented with a few layout components that Angular Material provides.  After testing [material expansion panels](https://material.angular.io/components/expansion/overview) to create that cohesive UI and a clean first impression, I decided to go with the more easy to read, [material data table](https://material.angular.io/components/table/overview) instead.  Application-wide navigation is handle within the header component and was built with responsiveness in mind thanks to the [angular flex layout library](https://github.com/angular/flex-layout/wiki).

The "shared" module consists of all the business logic that interacts with the [Firebase](https://firebase.google.com/) back end and a live music database API.  I went with Firebase because of how easy it is to spin up and connect to a realtime database and enable authorization for new and current users.  I decided to go with the [Songkick](https://www.songkick.com/) live music service and their [API](https://www.songkick.com/developer) to provide all the relevant data for my application.  Their robust API offers just the information I need, such as data on upcoming events by artist, venue, date, metro area, and more.  Making http requests to the Songkick API to pull the necessary data, combined with the back end, data storage and authorization capabilities of Firebase, is completely centralized within the 'shared' modules.  Executing requests to these two APIs within this module consolidates the transfer of data from outside sources into one key location in the app.  Simply calling methods I've created within the "shared" module helps make new features become a reality.![festival music rock sound](images/pexels-photo-92080.jpeg)

Moving on to the "artist" and "venues" modules, I developed these two main features to handle incoming data from either the Songkick API or directly from the user and display it in a meaningful way.  To have a maintainable architecture in place, the "artist", "venue", and "shared" modules work together to serve as the business logic foundation for the entire app.  With these modules working in tandem, I'm able to build out all the services and further functionality, such as searching for new artists/venues, for example.

I wanted users to be able to interact with and edit data in an easy to use fashion.  To make this happen, I organized and grouped the logic into individual components based on functionality.  For instance, allowing users to manually add, edit, and delete information from their list of artists/venues to track is contained within an “edit” component.  Similarly, other sibling components within the “artist/venue” modules, contains the code that allows users to search the Songkick music database for the purpose of adding a new artist/venue to their tracking list. 

To further illustrate this development pattern, the “artist-list-component” handles the requested data received from the Songkick API that is provided by the “shared” module.  With this functionality defined, the templates for the “artist-list-component” component appropriately displays the corresponding results and views (what the user sees), such as a list of artists that the user was searching for.  This design pattern permits the code for both the "artist" and "venue" modules to be very similar, therefore developing features for either module translates well to the other (searching for venues instead of artists).

The last main modules is the "Auth" (authentication) modules.  The auth section is divided into two other self explanatory components, (app)tly-named (_oh yeah_), login and register.  If a user wishes to register and have access to the entire feature set, the register component provides the logic that registers a new user by having them provide their email address and create a password.  Logging into the app is thereby handled by the login component which validates a previously registered user or provides validation errors on whether the email or password fulfills the corresponding requirements, such as proper password length.  

![newly make high rise building](images/architecture-construction-build-building-162557.jpeg)

Having this entire build design in place allows specific features to have their own contained separation of concerns and therefore makes further development, refactoring, and maintenance much easier, all while adhering to best practices.  Not only that, but avoiding [spaghetti code](https://www.techopedia.com/definition/9476/spaghetti-code) and sticking to [DRY (Don't Repeat Yourself) principles](https://web-techno.net/dry-principle-explained/) makes for a rock solid application and testable code base.  Making generous use of [Angular's CLI](https://cli.angular.io/) works wonders for creating new components and services almost instantaneously while automatically injecting the appropriate imports and systematically keeping the project organized.

* * *

## Deployment/Hosting

I decided to go with Amazon Web Services (AWS) platform to deploy "Live Music PDX". The reason for going with AWS is the [vast array](https://aws.amazon.com/products/?nc2=h_m1) of services they provide that cover almost all aspects of cloud computing and deployment.  [Services include](https://aws.amazon.com/products/?nc2=h_m1) all forms of hosting, creating APIs for backend services, database storage, authentication, and many other tools.  Having these different platforms at your disposal through AWS allows other features to be added on for future expansion and scaling as the project grows.

To get the project deployed I went with [S3](https://aws.amazon.com/s3/), or Simple Storage System.  S3 makes use of "buckets" which act as containers for me to then upload my production code.  The bucket then creates an endpoint to host the site which ends up being the web address of the application.  Setting permissions for access and adjusting properties of the bucket once the code is uploaded is easily controlled through the AWS console.  Also, I used ahead-of-time compilation, via the Angular CLI, before deploying to S3 to further reap performance enhancement.

With deployment successfully executed, production builds of "Live Music PDX" can be found here:

### ["Live Music PDX"](http://live-music-pdx.s3-website-us-west-2.amazonaws.com)

* * *

## Future development and conclusion

Future development of this application lies in the continuation of building on functionality already in place, while raising the bar for a better end user experience.  "Live music PDX" has become a sandbox of sorts for me to test out new features and creatively find solutions for building the application and all of it's intertwined features.  Also, keeping the end goal in mind and having the "why" for what I'm trying to achieve is essential in keep the project on track.

![bridge clouds cloudy dark clouds](images/pexels-photo-556416.jpeg)

Experimentation by way of Angular's vast ecosystem of APIs and tools has set the ground work for further development on the front-end side of things.  Angular's own Http Client, for example, offers developers much more functionality than the original http API found in Angular 2.   The Http Client introduced in Angular 4.3 has added the [HttpInterceptor interface](https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8), which can "intercept" and modify HTTP requests globally.  With regards to "[LMPDX](http://live-music-pdx.s3-website-us-west-2.amazonaws.com)", I plan to implement an authorization interceptor to better streamline auth verification.  To expand the use of Angular Material throughout the app, one of my current goals is to make use of the [paginator](https://material.angular.io/components/paginator/overview) for pagination of the upcoming live music events found on the homepage.  With continuous improvements and features arriving on an almost daily basis, LMPDX is an app that will continue to evolve into the new year.

Creating "Live Music PDX" has been, and continues to be, a rewarding experience in many regards.  Not only have I furthered my full stack knowledge and challenged myself to push through roadblocks,  I've also created an application that solves a real world problem.  It's a passion project I'm proud of, and one that I plan to keep developing well into the future and continue to learning from in the months ahead.  To bring things full circle, I've recently used LMPDX myself, to discover and see one my favorite artists, [Brian Fallon](https://twitter.com/thebrianfallon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor), perform live at [Revolution Hall](https://www.revolutionhall.com/) in SE Portland.  In closing, being able to use an app I built from the ground up to find events that create memories that can last a lifetime is truly magical.

![IMG_20181022_192804-COLLAGE](images/img_20181022_192804-collage.jpg)

Enjoying Brian Fallon live at Revolution Hall - Portland, OR

In the spirit of the holidays and the coming of a fruitful new year...

Rock on and happy coding! 🤘
