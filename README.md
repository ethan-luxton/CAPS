# LAB - Class 12

## Project: Event Driven Applications (CAPS Project)

### Authors: Ethan Luxton

### Problem Domain

Your application must employ the following programming concepts:

## Phase 2 Requirements
* In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called Socket.io so that clients can communicate over a network. Socket.io manages the connection pool for us, making broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

* The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but our developer story changes to reflect the work needed for refactoring.

### The following user/developer stories detail the major functionality for this phase of the project.

* As a vendor, I want to alert the system when I have a package to be picked up.
* As a driver, I want to be notified when there is a package to be delivered.
* As a driver, I want to alert the system when I have picked up a package and it is in transit.
* As a driver, I want to alert the system when a package has been delivered.
* As a vendor, I want to be notified when my package has been delivered.

### And as developers, here are some of the development stories that are relevant to the above.

* As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and client applications

### Links and Resources

[ci/cd](https://github.com/ethan-luxton/CAPS/actions/workflows/node.yml) (GitHub Actions)

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

![UML](https://i.imgur.com/0cqpVtP.png)