//
// parse_csv.js
//
// PURPOSE: Convert a typeid CSV from https://eve-files.com/chribba/typeid.txt
//          to a JSON mapping the type names to the type IDs.
//
// This script simply prints the converted JSON. You need to provide a CSV file
// named typeid.csv in the same directory that this is run from. This can be
// generated fairly simply using Microsoft Excel's data import feature.
//
// To save to a file, pipe the output (ie `node parse_csv.js > typeid.json)

const csv = require('csvtojson');

const FILEPATH = './typeid.csv'
let types = {};

csv()
    .fromFile(FILEPATH)
    .then((data) => {
        data.forEach((type) => {
            types[type.typeName] = type.typeID;
        })
        console.log(JSON.stringify(types));
    })
