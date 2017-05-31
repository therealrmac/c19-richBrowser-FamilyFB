"use strict";
console.log("main has loaded");


let fb= require("./fbLoader");
let $= require("jquery");
let build= require("./domBuilder");

function getFamily(fam){
    fb.loadFamily()
    .then(function(faaam){
        console.log("family is", faaam);
        build.populateDom(faaam);
    });
    
}

getFamily();

