"use strict";

let $= require("jquery");
let familyFB= require("./fbConfig");

function loadFamily(data){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${familyFB.getFBsettings().databaseURL}/family.json`
        }).done(function(event){
            resolve(event);
        });
    });
}


module.exports= {loadFamily};

