##Overview About Global State - Using React Context API

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

The overall idea is to make the Global application state management really flexible and easy to use for developer. Global store can be accessed using """store.set(’key1’, 'value1’)""" in one Component and read that value using """store.get(’key1’)""" or """store.key1""" in another Component.

The concept starts with :-
1) create a Context, Context.Provider and a Context.Consumer in a class called "store.js".
2) Now while creating Store using """StoreContext.Provider""" we set the value as the state. So we need methods to get, set and remove the values from the global state.
3) Next to make our code more easy to use, we are going to create two High Order Component i.e. one for context Provider and the other one for the context Consumer. The Main purpose of the higher order component is to take the one component and return a new component.
4) So, for using it, we will createStore by wrapping the main """App.js""" using HOC of createStore. And for consuming it, the component that want to use, we will use the consumer HOC to wrap the component to make the global state available for that component.

Application Screenshots -

In this demo application, I wanted to update the employee details using global state.

Employee Details Initially -

![GitHub Logo](/images/1.png)

Once User Click on the Edit - An Editable Grid is Visible

![GitHub Logo](/images/2.png)

Entering the value for updating global state -

![GitHub Logo](/images/3.png)

Once the global state is Updated, the component re-renders itself and displays the updated results.

![GitHub Logo](/images/4.png)


##******************************************##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
