# ZC-REMINDER Frontend

## #team-darwin

## Repository Description

This folder serves as the repository for the Zuri.chat reminder plugin frontend and adheres to the style and contribution guidelines as listed in the parent repository - [Readme](https://github.com/zurichat/zc_plugin_reminder#readme)

## Repository Structure

This project uses [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) for bootstrapping.

[Jest](https://archive.jestjs.io/docs/en/22.x/getting-started.html) for testing.

100% test coverage is the goal with shallow Enzyme assertions as minimum for components.\
Write tests for your components according to [Testing](#Testing)

## Setup

`clone` this repo on your pc, by typing out this command on your terminal.

- `git clone https://github.com/zurichat/zc_plugin_reminder.git`

- Then type this command in your terminal `cd zc_plugin_reminder/frontend`.
- `npm install` to get the necessary packages installed.

## Available Scripts

In the project directory, you can run:

- `npm run start`

  - Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
    The page will reload if you make edits.\
    You will also see any lint errors in the console.

- `npm run test`

  - Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## React Guidelines

### Basic Rules

- Functional components only!
- Functions are declared with ES6 [arrow function syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
- Only include one React component per file.
  - Multiple stateless components are allowed however.
- Use JSX syntax only.

### Naming

- Extensions: Use `.jsx` for React components and files containing JSX.
- Filenames: Use PascalCase for filenames. E.g., `DateCard.jsx`
- Reference Naming: Use PascalCase for React components and camelCase for their instances.

## Testing

[Jest](https://jestjs.io/docs/tutorial-react) is used as test runner with [Enzyme](https://enzymejs.github.io/enzyme/) for assertion.

### Basic Rules

- Write tests to fail then update to pass. See [zc_plugin_reminder: Testing](https://github.com/zurichat/zc_plugin_reminder#testing)
- `test` is preferred over `it` in Jest as convention.

### Naming

- Tests are created on a component basis in `__test__`
- Tests are named in the format `<ComponentName>.test.js` and `<ComponentName>.test.jsx` for JSX files.

### Assertion

- Mock impure functions. See [Mocking Function](https://github.com/zurichat/zc_plugin_reminder#testing)

## Styling

- [TailwindCSS](tailwindcss.com/docs) is used for CSS styling.\
  Styles are declared using Tailwind utility classes.\
  E.g., `<div className="h-full flex flex-1 bg-blue-50"/>`

- [React-Bootstrap](https://react-bootstrap.github.io/getting-started/introduction) provides stock UI components.

### Tailwind

If you're new to Tailwind, instead of writing full length CSS styles you use shorthand descriptions of the styles.

For example, in rounding the top corners of an element, regular css would look like\
`border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;`

In tailwind this is easily written with `rounded-t-sm`\
And you get to write the styles directly in your javascript so you don't have to deal with selectors, specificity etc.

Install the VSCode [Tailwind extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) to get suggestions and corrections on utility class names.

Check the [TailwindCSS Docs](tailwindcss.com/docs) for the full utility class list.

### React-Bootstrap

React Bootstrap like any other component library provides ready made components for use in building app UIs.\

#### Usage

Import the component you want to use from the corresponding component folder.\
`import Accordion from "react-bootstrap/Accordion"`

#### Styling

Styling react-bootstrap components is done with bootstrap utility classes.\
These classes are passed using the `variant` props on components.

The React-Bootstrap docs have detailed information on possible variants and the [component APIs](https://react-bootstrap.github.io/components/alerts/) in general.
