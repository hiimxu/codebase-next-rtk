const commonConfig = require("./common");

const config = {
  ...commonConfig,
  // schema swagger
  schemaFile: "https://petstore.swagger.io/v2/swagger.json",
  outputFiles: {
    "../src/redux/endPoint/myProfile.ts": {
      exportName: "MyProfileAPI",
    },
  },
};

module.exports = config;
