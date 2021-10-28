#!/usr/bin/env node

var fs = require("fs");
const { transpileSchema } = require('graphql-s2s').graphqls2s

fs.readFile(process.argv[2], function(err, buf) {
  console.log(transpileSchema(buf.toString()));
});
