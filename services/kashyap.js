const React = require("react");
const ReactDOM = require("react-dom/server");
const { Provider } = require("react-redux");
const clientStats = require("../static/stats.json");
const { flushChunks } = require("webpack-flush-chunks");
const { flushChunkNames } = require("react-universal-component/server");
const App = require("../client/components/App");

import createHistory from "history/createMemoryHistory";
import { NOT_FOUND } from "redux-first-router";
import configureStore from "../client/configureStore";

export default async (req, res) => {
  const jwToken = "real"; // see server/index.js to change jwToken
  const preLoadedState = { jwToken }; // onBeforeChange will authenticate using this

  const history = createHistory({ initialEntries: [req.url] });
  const { store, thunk } = configureStore(history, preLoadedState);

  // if not using onBeforeChange + jwTokens, you can also async authenticate
  // here against your db (i.e. using req.cookies.sessionId)

  let { location } = store.getState();
  if (doesRedirect(location, res)) return false;

  // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
  // await Promise.all([store.dispatch(myThunkA), store.dispatch(myThunkB)])

  await thunk(store); // THE PAYOFF BABY!

  // eslint-disable-next-line
  location = store.getState().location; // remember: state has now changed
  if (doesRedirect(location, res)) return false; // only do this again if ur thunks have redirects

  const status = location.type === NOT_FOUND ? 404 : 200;
  res.statusCode = status;
  return store;
};

const doesRedirect = ({ kind, pathname }, res) => {
  if (kind === "redirect") {
    res.redirect(302, pathname);
    return true;
  }
  return false;
};

module.exports = async function(fastify) {
  fastify.get("*", async function(request, reply) {
    // Some promise if u want
    // fastify.log.info({
    //   serverTime: new Date().toLocaleString(),
    //   staticFileName: request.params.staticFileName
    // });
    const store = await configureStore(req, res);
    if (!store) return; // no store means redirect was already served
    const app = createApp(App, store);
    const appString = ReactDOM.renderToString(app);
    const stateJson = JSON.stringify(store.getState());

    const chunkNames = flushChunkNames();
    const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames });

    console.info("REQUESTED PATH:", request.raw.url);
    console.info("CHUNK NAMES", chunkNames);
    fastify.log.info(chunkNames);
    // fastify.log.info(request.params.staticFileName);
    reply.header("Content-Type", "text/html");
    reply.send(`<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>redux-first-router-demo</title>
        ${styles}
        <link rel="stylesheet prefetch" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
      </head>
      <body>
        <script>window.REDUX_STATE = ${stateJson}</script>
        <div id="root">${appString}</div>
        ${cssHash}
        <script type='text/javascript' src='/static/vendor.js'></script>
        ${js}
      </body>
    </html>`);
    // reply.end();
  });
};

const createApp = (App, store) => (
  <Provider store={store}>
    <App />
  </Provider>
);
