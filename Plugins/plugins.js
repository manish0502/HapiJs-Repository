module.exports= [
    {
      plugin: require("hapi-geo-locate"),
      options: {
        enabledByDefault: true,
      }
    },
    {
      plugin: require("@hapi/inert"),
    },
    {
      plugin: require("@hapi/vision")
    }
  ]