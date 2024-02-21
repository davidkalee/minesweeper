# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TO RUN:
1. Install node modules: `npm install`.
2. Run `npm run start`.
3. Navigate in browser to `localhost:3000`.

## MISCELLANEOUS
- Use of `JSON.parse(JSON.stringify())` is a fast but hacky method to deep copy. As the application is developed, consider using a library such as lodash.
- Although making copies is not necessary in these instances, it is helpful to follow the immutability principle.

## TODOS:
- add tests
- add feature to allow users to input size of grid and num of mines
  - right now, size of grid and num of mines must be changed manuall in code (line 8 and 9 of App.js)