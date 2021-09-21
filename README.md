# Module Project: Advanced Form Management - User Onboarding

## Project Description

We've seen many different styles of form management by now -- simple to complex. Today we are going to unleash your inner form-wizard! 🧙

## Instructions

### Task 1: Set Up The Project

- [x] Start off by installing a blank React app by running `npx create-react-app <app-name> --use-npm`.
- [x] Using `npm`, add the following as dependencies inside your React app:
  - `yup`
  - `axios`
- [x] Create a component file called `Form.js`, import it into your `App.js` file, and place the component in your JSX there.

### Task 2: MVP

#### Create Your Advanced Form

We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- [x] Name
- [x] Email
- [x] Terms of Service (checkbox)
- [x] A Submit button to send our form data to the server.

#### Implement Form Validation and Error Messaging

Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

- [ ] Using Yup, set up _at least_ two different validations along with custom error messages that will display on screen when validation fails.

#### Display Returned Data to Screen

When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

- [x] Render `users` in your app.

### Task 3: Stretch Goals

The following are stretch goals that you should attempt _after_ you meet MVP for your project:

- [ ] Add basic styling to your form in your app. Make it look pretty with any styling method you choose.
- [x] Implement a dropdown menu in your form. Add a `role` value to your state and add a dropdown with different roles for your users.
- [ ] Add to your existing handling so that, if a user inputs their email as `waffle@syrup.com`, they receive an error message in their form that says _"That email is already taken."_