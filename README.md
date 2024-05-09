Unit 18 Challenge

#Description:

Work on this project was implemented at the request of the client, whose user story stated the following: "AS A social media startup I WANT an API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data."

The Challenge for this project was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. To do this, the following will be used for successful completion: Express.js for routing, a MongoDB database, the Mongoose ODM for the open-source NoSQL database management system, and Insomnia to test the functionality of the finished product. In addition to using the Express.js and Mongoose packages, an optional inclusion was to use a JavaScript date library of my choosing, or the native JavaScript `Date' object, to format timestamps; I elected not to utilize this option for this project.

##Acceptance Criteria:

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

Github Repo Link:

https://github.com/vicduar/SocialNetwordAPI18.git

Screencastify Link: 

https://drive.google.com/file/d/170Bm8B9sEPtn_-9Y5BXmnGUm_XAttK2m/view


##Installation:

The project was created using VS Code editor where Express.js was used for routing, MongoDB for the database, and the Mongoose ODM library. Once complete, the project was uploaded to a Github repository.

##Usage:
In order to have the server restart automatically, nodemon has been selected as the server start command. This is entered into the integrated terminal in VS Code. Insomnia is loaded and the server connection is made. Then, testing of each function (Get, Post, Put, Thought, and Delete) is performed in Insomnia.

##Contributions:

References

Github (2024). A free web-service for storing and deploying websites. Multiple pages retrieved and utilized from www.github.com April 20, 2024.

MDN (April 20, 2024). Mozilla resources for developers. Multiple pages retrieved from https://developer.mozilla.org/en-US/ .

Meyers, M. (2024, May 7-9). Tutoring session via Www.zoom.us . Denver University Bootcamp.

NPM (2024, May 7). Node.js website. Retrieved from https://www.npmjs.com/package/inquirer .

W3Schools (2024, May 7-8). The world’s largest web developer site. Multiple pages retrieved from www.w3schools.com April 7-8, 2024.

##License

This project is licensed under the MIT license.
