"use strict";

let fb= require("./fbGetter");
let fbData= fb.getKey();

var fbConfig= {
    fbKey: fbData.apiKey,
    databaseURL: fbData.databaseURL
};

let getFBsettings=()=>{
    return fbConfig;
};



module.exports= {getFBsettings};
