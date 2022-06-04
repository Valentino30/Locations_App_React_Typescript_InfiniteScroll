# Locations List App

This is a demo app that allows you to get all available locations from the confidence API and display them in a fully responsive and infinite scrollable list.

## Getting Started

Here is how to get started with the project:

- Request access to CORS Anywhere demo server [here](https://cors-anywhere.herokuapp.com/corsdemo)
- Clone the repo locally running `git clone git@github.com:Valentino30/Locations_List_App_React_Typescript_InfiniteScroll.git`
- Open the project in your favorite IDE (i.e. [VSCode](https://code.visualstudio.com/))
- Add YOUR_CONFIDENCE_USERNAME to the .env.example file and rename it as .env
- Run the command `yarn` in the project directory to install all dependencies
- Run the command `yarn start` in the project directory to launch the app
- Run the command `yarn test` in the project directory to run all unit tests
- You're good to go :)

The app will run in development mode at [http://localhost:3000](http://localhost:3000) and the page will automatically reload if you make any changes.

## Usage

- Launch the app to see the first three locations loaded automatically
- Each location will be displayed together with its name, details, type and address
- Scroll to the bottom of the list to load the next three locations
- That's it :)

## Dependencies

This project relies on the following dependencies:

- [Create React App Typescript](https://create-react-app.dev/docs/adding-typescript/)
- [Styled Components](https://styled-components.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [ENV CMD](https://www.npmjs.com/package/env-cmd)
- [Axios](https://axios-http.com/)
