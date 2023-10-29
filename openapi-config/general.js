const commonConfig = require("./common");

const config = {
  ...commonConfig,
  // schema swagger
  schemaFile: "./dis.json",
  outputFiles: {
    "../src/redux/endPoint/general.ts": {
      exportName: "GeneralApi",
    },
  },
};

module.exports = config;
