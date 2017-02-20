# create-react-app with a Node server on Heroku

A minimal example of using a Node backend (API, proxy, & routing) with a [React app](https://github.com/facebookincubator/create-react-app) and an [Express server](http://expressjs.com).

To deploy a frontend-only React app, use the static-site optimized
▶️ [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)


## Design Points

A combo of two npm projects, the backend and the frontend. So there are two `package.json` configs.

  1. [`package.json`](package.json) for [Node server](server/) & [Heroku deploy](https://devcenter.heroku.com/categories/deployment)
      * `heroku-postbuild` script compiles the webpack bundle during deploy
      * `cacheDirectories` includes `react-ui/node_modules/` to optimize build time
  2. [`react-ui/package.json`](react-ui/package.json) for [React web UI](react-ui/)
      * generated by [create-react-app](https://github.com/facebookincubator/create-react-app)


## Punchline

[Demo deployment](https://cra-node.herokuapp.com/).

Example API call is [fetched from relative URL](react-ui/src/App.js#L16).


## Deploy to Heroku

```bash
git clone https://github.com/mars/heroku-cra-node.git
cd heroku-cra-node/
heroku create
git push heroku master
```

This deployment will automatically:

  * detect [Node buildpack](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs)
  * build the app with
    * `npm install` for the Node server
    * `heroku-postbuild` for create-react-app
  * launch the web process with `npm start`
    * serves `../react-ui/build/` as static files
    * customize by adding API, proxy, or route handlers/redirectors

👓 More about [deploying to Heroku](https://devcenter.heroku.com/categories/deployment).


## Local Development

### Run the API Server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```


### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start the server
npm start
```
