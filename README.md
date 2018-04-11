
## React Starter 2.0 ##
An easy React Starter Kit to get you up and running quickly. It includes the some of the latest and greatest:

 - React Fiber
 - React Router V4.
 - Redux, Redux Thunk & Redux Logger
 - Support for Async Await
 - Webpack & Webpack Dev Server.
 - Live Reloading.
 - PostCSS, Autoprefixer and SCSS.
 - Testing Setup for Jest and Enzyme.
 - Plenty of cool Babel plugins

## Installation ##

 1. `git clone https://github.com/DZuz14/React-Starter-2.0`
 2. `npm install`

 Upon very first installation, the postinstall command in the package.json will automatically build and put some files
 into the dist folder for you.
## Running ##

- `npm run devHot` (Hot reload with webpack dev server)
- `npm run devWatch` (Continuously builds new bundle, but no hot reload/webpack dev server)
- `npm start` (Normal)
- `npm run prod` (Prepare for production)

## Testing ##

1. `npm run test`

Check out how the sample test works, and then head to Jest and Enzyme documentation to learn how to use them.

## Nice Features ##

### Babel Root Import ###
Almost eliminate typing relative paths everywhere in your app. No more '../../../../some-folder'.
Just use:

`import Example from '~/'`

and babel-plugin-root-import will make sure that your always starting from the top level of the 'src' directory.
