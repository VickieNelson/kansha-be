# API Documentation

[![Maintainability](https://api.codeclimate.com/v1/badges/da01f596f6f9f722c5b8/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/kansha-be/maintainability)

![Heroku](https://heroku-badge.herokuapp.com/?app=kansha-api)

## Getting started

To get the server running locally:

-   Clone this repo
-   **npm i** to install all required dependencies
-   **npm run server** to start the local server
-   **npm test** to start server using testing environment

### NodeJS

Why did you choose this framework?

-   Was a big part of the Lambda Curriculum
-   Ability to keep data in JSON format
-   Future Devs can easily work with Node because of JS knowledge

## Endpoints

For detailed documentation of our API endpoints, please refere to the documentation.md file in the root directory.

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

-   DATABASE_URL =
-   CLIENT\*ID =

-   DOMAIN =
-   SIGNING_CERT_URL =
-   S3\*BUCKET_NAME =
-   S3\*ID =
-   S3\*KEY =
-   AWS_ACCESS_KEY_ID = \* AWS_SECRET_ACCESS_KEY =

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

-   Cck first to see if your issue has already been reported.
-   Cck to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
-   Cate a live example of the problem.
-   Smit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

-   Ensure any install or build dependencies are removed before the end of the layer when doing a build.
-   Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
-   Ensure that your code conforms to our existing code conventions and test coverage.
-   Include the relevant issue number, if applicable.
-   You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/kansha-fe/blob/master/README.md) for details on the fronend of our project.
