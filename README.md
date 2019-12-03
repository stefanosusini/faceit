# FaceIT Test
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:4545](http://localhost:4545) to view it in the browser.

### `yarn test`

Same as Create React App

### `yarn build`

Same as Create React App

## Notes

I worked on this project while travelling to Italy. Due to the limited amount of time available, I made some design/implementation choices:
- I've tested only a limited number of components. I wanted to showcase the use of snapshots and the test of an interaction,
- I haven't ejected the Create React App the project is derived from. Basic configuration has allowed me to setup a reasonable environment that includes (but is not limited to):
  - Css modules
  - Use of Sass (Scss)
  - Modules aliases (to import components through their path relative to the `src` folder)
- I've modified the provided `fetchChampionship` function to simulate some delay in the data fetching,
- Any question please do no hesitate to ask :)
