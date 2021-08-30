# ZC-REMINDER 

## #team-darwin

## Project Description
The reminder plugin is an external feature that gives users the ability to set tasks and reminders on the whatever they are setting. It comes in handy when you and your teammate wants to prioritize doing a certain task or feature over a certain time frame. Users are able to assign tasks to a teammate or an entire channel by navigating directly to the plugin, input the necessary details for that reminder and the teammates are notified accordingly. It aims to serve the entire Zuri Chat.

### Project Structure

This project is a monolith application. You will find two folders namely:

1. Backend
2. Frontend

Depending on your track, you are to work in the folder that concerns you.


### Setup
Simply `clone` this repo on your pc, by typing out this command on your terminal.

- `git clone https://github.com/zurichat/zc_plugin_reminder.git`
- Then type this command in your terminal `cd zc_plugin_reminder`. Depending on what you're working on, for example `Backend`. You are meant to go into the `Backend folder` and run `npm install` to get the necessary packages installed.

### Contributing
1. Before working on any task, you are meant to pull the latest changes from the `dev` branch, then create a separate branch to work on that particular task. 

2. When creating PR, link the issue you worked on to your PR and wait for it to be reviewed. Never merge on your own.


## Coding Guide

### Commits

Git commits should follow the format:

```javascript
[file/method/function changed]: (Fixes #num | Refs #num  | Closes #Num) Your descriptive commit message
```

**Note**: #num is a pull or issue number.

For example:

`[Navbar]: Fixes #20 Add side-navbar`

### Major Changes

All changes are made in new branches and a pull request should be opened against the dev branch for review.

### File names
File names must be all lowercase and may be separated by dot . For example: 

```javascript
- User
    - create.user.js
    - update.user.js
```

### Indentation
We use two spaces for indentation. If you use a code editor like vscode, you can set a default spaces to 2 instead of 4. We do not use Tab.

### Source file structure

A file consist of the following, in order:
* License or copyright information
* ES import statements, if an ES module
* The file’s source code

For example

```javascript
/**
    Copyright 2021, ZC-Plugin-reminder.
    All rights reserved.
    Written by <your name>
**/

import Button from 'components/button'
import me from 'you'
import { cat, dog, eagle } from '../animals'

/**
    Returns the sum of two numbers
    @param {number} num1 
    @param {number} num2 
    @returns {number} sum of num1 and num2 
*/ 
const returnTotal = (num1, num2) => {
     return num1 + num2
 }
```

## Naming convention

### Class names

Class, interface, record, and typedef names are written in UpperCamelCase e.g LoadAvatar. Type names are typically nouns or noun phrases. For example, Request.

### Method names
Method names are written in lowerCamelCase e.g `addNum`. Names for private methods must start with a trailing underscore e.g _startAddition.

Method names are typically verbs or verb phrases. For example, `sendRequest` or `_startProcess`. Getter and setter methods for properties are never required, but if they are used they should be named `getThing` (or optionally `isThing` or `hasThing` for booleans), or `setThing(value)` for setters.

### Constant Names
Constant names use `CONSTANT_CASE`: all uppercase letters, with words separated by underscores.

### Testing
We use [Mocha](https://www.npmjs.com/package/mocha) and [Jest](jestjs.io) for testing, and require contributors to follow a Test Driven Development (TDD) approach where you write test to fail at first and then write the corresponding function to pass the test.
