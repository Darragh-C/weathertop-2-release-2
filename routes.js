"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const station = require("./controllers/station.js");
const accounts = require('./controllers/accounts.js');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get("/about", about.index);

router.get("/dashboard", dashboard.index);
router.post('/dashboard/addstation', dashboard.addStation);

router.get('/station/:id', station.index);
router.post('/station/:id/addreading', station.addReading);


module.exports = router;
