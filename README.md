# LAB - Class 11

## Project: Event Driven Applications (CAPS Project)

### Authors: Ethan Luxton, Stacy Yu, Michael Gazaway

### Problem Domain

Your application must employ the following programming concepts:

## Phase 1 Requirements
* Today, we begin the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a pool of events and handler functions, with the intent being to refactor parts of the system throughout the week, but keep the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

### The following user/developer stories detail the major functionality for this phase of the project.

* As a vendor, I want to alert the system when I have a package to be picked up.
* As a driver, I want to be notified when there is a package to be delivered.
* As a driver, I want to alert the system when I have picked up a package and it is in transit.
* As a driver, I want to alert the system when a package has been delivered.
* As a vendor, I want to be notified when my package has been delivered.

### And as developers, here are some of the development stories that are relevant to the above.

* As a developer, I want to use industry standards for managing the state of each package.
* As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time.

### Links and Resources

[ci/cd](https://github.com/ethan-luxton/CAPS/actions/workflows/node.yml) (GitHub Actions)
Main Deployment - Backend: In pull request comments

### Setup

#### .env requirements

None

#### How to initialize/run your application

npm start

#### Features / Routes

-   Feature One: console log of event when a package has been picked up

    
-   Feature Two: console log of event when there is a package to be delivered
-   Feature Three: console log of an alert to the system when I have picked up a package and it is in transit
-   Feature Four: console log alert to the system when a package has been delivered.
-   Feature Five: console log notification when a package has been delivered.
-   Feature Six: testing
-   Feature Seven: Deploy to Dev
-   Feature Eight: Deploy to main

#### Tests

-   How do you run tests?
    -   npm test
-   Any tests of note?
    - Tests mock functionality of specific IDs for deliveries
    - Tests mock functionality of full randomly generated orders


### UML

![UML](https://i.imgur.com/8sCu386.png)