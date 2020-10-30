---
title: "A New Angle with Angular(2+)"
date: "2017-11-12"
description: Let's check out the differences with Angular(2+)
---

# A new angle with Angular(2+)

![angular](https://nathanpickard.files.wordpress.com/2017/11/angular.png?w=300)![AngularJS-Shield-medium](https://nathanpickard.files.wordpress.com/2017/11/angularjs-shield-medium.png?w=286)

Having recently made the leap from AngularJS to Angular(2+), I've noticed a multitude of key differences between the two. So much so, that at first glance of the code base of an identical application built in either flavor of Angular, one would presume that they were constructed by two separate frameworks with noticeable differences. And they'd undoubtedly be correct!

One of the main key features that is central to Angular is it's component based architecture. While a project written in AngularJS can be broken down into multiple and reusable components, coding in Angular makes components themselves the central focus.  Controllers and $scope are some of AngularJS's hallmark features. However, they're absent in Angular and essentially replaced with it's own [component-based architecture](http://busypeoples.github.io/post/thinking-in-components-angular-js/).  Let's see what's changed!

### Angular 1.x

In my very own recipe application, which is coded in AngularJS, the controller for adding new recipes is written as such:

_main.js_:

 ```
use strict';
function MainCtrl($scope, $log, $interval, dataService) {
  dataService.getRecipes(function (res) {  
  var recipes = res.data.recipes;
    $scope.recipes = recipes;
  });  
 $scope.addRecipe = function () {     
  $scope.recipes.unshift({      
    name: "This is a new recipe.",
    completed: false
    });
  };
}
 
module.exports = MainCtrl;
```

In this block of code, the logic of main.js  is contained within the controller. The _getRecipes_ method is called on the dataService which assigns the response from the http call to the '_recipes_' variable.  The _$scope.addRecipe_ function adds a new recipe object to the _$scope.recipes_ array.  The entirety of the _MainCtrl_ function is exported on the last line of code.

Next, the controller is attached to the view by the ng-controller directive in the index.html using _ng-controller="mainCtrl"_.

### Angular 2+

Angular does this a bit differently though. From what I've built with Angular so far, the absence of $scope and controllers make the codebase easier to manage with the added benefit of the modular, component-based design.  Keeping track of $scope is no longer needed and the use of [TypeScript](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8) in Angular also extends the capabilities of the framework.

In the following block of code from a product management application, in comparison to the recipe controller above, we can see Angular's architecture in action. _product-list.component.ts_:

> `import { Component, OnInit } from '@angular/core';` `import { IProduct } from './product';` `import { ProductService } from './product.service';`
> 
> `@Component({` `  templateUrl: './product-list.component.html',` `  styleUrls: ['./product-list.component.css']` `})` `export class ProductListComponent implements OnInit {` `  pageTitle: string = 'Product List';` `  imageWidth: number = 50;` `  imageMargin: number = 2;` `  ...` `  ...` `  listFilter: string;` `  products: IProduct;`
> 
>  `constructor(private productService: ProductService) { }`
> 
>  `toggleImage(): void {` ``    this.showImage = !=this.showImage; `  }` `` 
> 
>  `onRatingClicked(message: string): void {` `  this.pageTitle = 'Product List: ' + message;` `  }`
> 
>  `...` `  ...` `}`

One of the benefits of Angular's modularity lets the developer import only the modules one needs to get the job done.  In the product list component, we import the '_Component_' module from Angular's own library, '_@angular/core_'.  We can also import modules that we define ourselves.  In the above code, I've imported the _ProductService_ that I have defined myself, which handles all of the back-end http calls from a database.

Next, the '_@Component_' [decorator](https://toddmotto.com/angular-decorators) allows us to provide additional metadata that determines exactly how the the component should be processed.  Here we see that this component is attached to the '_product-list.component.html_' template view.  The styling for this component can be defined with which ever CSS file we'd like,  appropriately defined as '_product-list.component.css_' here.

Finally, the component's logic is defined in the '_export class ProductListComponent_' section.  In the example, objects in the template, such as the 'pageTitle', 'imageWidth', and 'imageMargin' are initialized here.  This is then followed by whatever functions we'd like to initialize and define, similar and comparable to AngularJS's method.  Here the behavior of the '_toggleImage_' and '_onRatingClicked_' functions are defined and both are triggered from the user's click event.

### Conclusion

Angular architecture offers much in the way of modularity and clearly defined components.  Any ambiguity that may be involved when tracking which properties are assigned to AngularJS's $scope object, along with injecting controllers into the view, are no more.  The separations of concerns is more pronounced in Angular and defining exactly how we'd like the components to behave makes for a cleaner codebase.  So far, I've found that constructing new application features while maintaining the existing project code is much easier in Angular 2+.  Cheers to modularity!