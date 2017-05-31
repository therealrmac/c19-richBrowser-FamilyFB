"use strict";

let $= require("jquery");
let template= require("../templates/output.hbs");

function populateDom(event){
    $("#output").html(template(event));
}


module.exports= {populateDom};
