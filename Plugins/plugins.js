module.exports= [
    {
      plugin: require("hapi-geo-locate"),
      options: {
        enabledByDefault: false,
      }
    },
    {
      plugin: require("@hapi/inert"),
    },
  ]