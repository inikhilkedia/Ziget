## ZIGET



## Method and Explanation

I have taken a simple approach for completing this task. All my code is in 2 files `Ziget.js` and `Ziget.css`. I have tried to stay close to the design and I have some some liberty to make the app look a little better. My primary focus was on functionality.

- My State:
  `this.state = {
      usernames: ``,
      individual: false,
      jobId: ``,
      data: {},
      dataOut: ``,
      loading: false
    };`
    
- My Functions:
 - handleTAChange = This handles the changes to the `Username TextArea`
 - handleCBChange = This handles the changes to the `Individual Checkbox`
 - handleSubmit = This is the submit function where all the other functions are called to run as needed.
 - getJobID = This function performs the `POST` method Fetch to returns the `JobId` by passing an object `{
  "username": "account1,account2,...",
  "individual": true
}`
 - getData = This function performs the `GET` method Fetch to return the engagement data from Zyper by passing the extracted jobId from the `getJobID` function.
 
 ## Observations, Problems and tried or possible solutions.
 
 - `Result Status 202` = A possible solution is to call the getData(GET Fetch) call with some delay. I have done it a 3 second delay and the Status 202 doesn't occur at all now.
 
 - `Individual Toggle` = There seems to be a problem with the API where it hardly ever recognizes the individual as false. I did some testing on `PostMan Ap`p and all the results were `Individual = true` even if I set it to `false`.
 
 - `Cors restriction for localhost` = The API's Cors restriction do not allow the data to be read because the code is being run on the dev server on localhost
 
 I am open to questions - inikhilkedia@gmail.com

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
