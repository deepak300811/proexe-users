### `The Administration dashboard ๐`

### Developed by Deepak Kumar (deepak300811@gmail.com)

### Available at https://proexechallengebydeepak.netlify.app/ ๐

# Third party / Helper libraries used in this project โค๏ธ

1. For styling: TailwindCSS, along with some minute manual overrides in App.css
2. For making network requests: Axios
3. State management: redux, react-redux
4. Middleware: redux-thunk

# Architecture of the project ๐

1. App is the parent of the view of our application, (it is providing a div which directes the width of the whole application).
2. App > Container contains all the working things in our project, the view which gets changed, all happens in container, A container can contain many other   Components. In our example the container contains Header, Form, Table.
3. Based on the conditions either a Form will be rendered or a Table.
4. Have utilized the concept of Portals to show the confirmation modal-up when Administrator tries to delete something.

# About the Redux store ๐๐ปโโ๏ธ

1. The project heavenly use the powers of Redux, and it's middleware such as thunk (thunk help us to do asynk tasks before dispatching the action on the reducer).
2. For simplicity we have only put two objects in state such as users, and sort. But ofcourse we can add other pieces such as isLoading, errorState, etc, but that will go outside the scope of this web app. (For now we have handeled all the errorState and loading in components)
3. for accessing state and dispatching actions we have used powers of useSelector, and useDispatch hook provided by 'react-redux' (We think it makes the app really simple rather than using a Higher Order Component named Connect for every state piece and dispatch)
4. Concepts of actions creators have been exploited well and all the action definations can be seen in 'src/Store/actionCreators.js'

# Dumb components ๐

1. Table, ConfirmationModal, Form, Header

# Ascending / Descending sort based on username โงก

A button is introduced near username heading in table, clicking on that the users' list will be sorted, originally it will be sorted in ascending order. If that button is clicked again, the list will be sorted in descending order and vice versa.

# Limitations with JSON Server and Asumptions ๐ข

## Problem: As we know we can't get an OK status for fake jsonserverapi when admin edits or delete a user created by admin himself, because we know that created user won't be existing on the fake json server. ๐ญ

### Solution: We have introduced a userAdded flag for each of the users we have in our store. ๐ก

1. for all the users who come from server we sat their userAdded flag to false. And for all the users added by admin himself, we set userAdded flag for them as true.
2. When for a particular user userAdded = false, then we dispatch an action which will first make an api call to fake json server and get the status code for that edit / deletion operation.
3. if for a particular user userAdded = true (that means that user was added by admin newly). then we dispatch an action which will directly do the edit / deletion operation on store. (If a rest call was sent in this case,we all know we will be 404 error, because that user doesn't exist on the fake server).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you canโt go back!**

If you arenโt satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youโre on your own.

You donโt have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnโt feel obligated to use this feature. However we understand that this tool wouldnโt be useful if you couldnโt customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
