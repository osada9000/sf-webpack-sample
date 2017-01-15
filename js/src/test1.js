/**
 * Created by manabu.osada on 2017/12/15.
 */
"use strict";
const $ = require('jquery');
const moment = require('moment');
let currentDate;

setInterval(() => {
    currentDate = moment().toISOString();
    $("#AAA")[0].innerHTML = currentDate;
}, 1000);
