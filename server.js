"use strict";
const Hapi = require("@hapi/hapi");
var routes = require("./routes/index");
const Path = require('path');
const plugins= require("./Plugins/plugins");
const client = require("./database")

// database connection

const DB = async ()=>{
  await client.connect()
}

DB();

client.query(`select * from person` , (err, result)=>{
  if(!err){
    console.log(result.rows);
  }
  client.end()
  console.log(err)
})

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
  await server.views({
      engines:{
        //   html: require('handlebars')
        hbs: require('handlebars')

      },
      path:Path.join(__dirname, 'dynamic-files'),
      layout:'default'
  })

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



