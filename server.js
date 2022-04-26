"use strict";
const Hapi = require("@hapi/hapi");
var routes = require("./routes/index");
const Path = require('path');
const plugins= require("./Plugins/plugins");

// start server
const start = async () => {
  const server = Hapi.server({
    port: 8000,
    host: "localhost",
    routes: {
        files: {
          relativeTo: Path.join(__dirname, './static-files')
        }
      }
  });

// adding Plugins
  await server.register(plugins);

// define route
  server.route(routes);

  await server.start();
  console.log(`Server is running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  if (err) {
    throw new Error("I'm Evil", err);
  }
  process.exit(1);
});

start();
