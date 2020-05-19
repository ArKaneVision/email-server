// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for examples
const PortfolioEmail = require('../models/example')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /examples
router.post('/portfolioEmail', (req, res, next) => {
  PortfolioEmail.create(req.body.example)
    // respond to succesful `create` with status 201 and JSON of new "example"
    .then(example => {
      res.status(201).json({ example: example.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

module.exports = router
