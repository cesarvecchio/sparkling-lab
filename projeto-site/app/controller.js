const express = require('express');
const { ArduinoData } = require('./serial')
const router = express.Router();


router.get('/', (request, response, next) => {

    let sum = ArduinoData.List.reduce((a, b) => a + b, 0);

    response.json({
        data: ArduinoData.List,
    });

});

module.exports = router;