/* eslint-disable @typescript-eslint/no-var-requires */
// const { readFileSync } = require("fs");
const swaggerToTS = require("openapi-typescript").default;
const fetch = require("node-fetch");
const fs = require('fs');
require("dotenv").config({ path: "./.env.local" });

async function main() {
  console.log(
    "got",
    process.env.SUPABASE_URL,
    process.env.VUE_APP_SUPABASE_KEY
  );

  const response = await fetch(
    `${process.env.SUPABASE_URL}/rest/v1/?apikey=${process.env.VUE_APP_SUPABASE_KEY}`
  );
  const json = await response.json();


  // const input = JSON.parse(readFileSync("spec.json", "utf8")); // Input can be any JS object (OpenAPI format)
  const output = swaggerToTS(json); // Outputs TypeScript defs as a string (to be parsed, or written to a file)

  fs.writeFile('./src/types/supabase.d.ts', output, function (err) {
    if (err) return console.log(err);
    console.log(output);
  });
}

main();
