# ZC-REMINDER Frontend

## #team-darwin

## Repository Description

This folder serves as the repository for the Zuri.chat reminder plugin frontend and adheres to the style and contribution guidelines as listed in the parent repository - [Readme](https://github.com/zurichat/zc_plugin_reminder#readme)

## Repository Structure

This project uses [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) for bootstrapping.\
[Jest](https://archive.jestjs.io/docs/en/22.x/getting-started.html) for testing.

## Setup

`clone` this repo on your pc, by typing out this command on your terminal.

- `git clone https://github.com/zurichat/zc_plugin_reminder.git`

- Then type this command in your terminal `cd zc_plugin_reminder/frontend`.
- `npm install` to get the necessary packages installed.

## Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## React Guidelines

### Basic Rules

- Functional components only!
- Functions are declared with ES6 [arrow function syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
- Only include one React component per file.
  -- Multiple stateless components are allowed however.
- Use JSX syntax only.

### Naming

- Extensions: Use `.jsx` for React components and files containing JSX.
- Filenames: Use PascalCase for filenames. E.g., `DateCard.jsx`
- Reference Naming: Use PascalCase for React components and camelCase for their instances.

## Testing

[Jest](https://jestjs.io/docs/tutorial-react) is used as test runner with [Enzyme](https://enzymejs.github.io/enzyme/) for assertion.

### Basic Rules

- Write tests to fail then update to pass. See [#Testing](https://github.com/zurichat/zc_plugin_reminder#testing)
- `test` is preferred over `it` in Jest as convention.

### Naming

- Tests are created on a component basis in `__test__`
- Tests are named in the format `<ComponentName>.test.js` and `<ComponentName>.test.jsx` for files containing JSX.

### Assertion

- Mock impure functions. See [Mocking Function](https://github.com/zurichat/zc_plugin_reminder#testing)
