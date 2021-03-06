const express                                   = require('express'),
      notFound                                  = require('../utils/404'),

      getStats                                  = require('../middleware/getStats'),
      authLoggedIn                              = require('../middleware/authLoggedIn'),

      showDashboard                             = require('../controllers/admin/showDashboard'),
      showList                                  = require('../controllers/admin/showList'),
      submitDisquette                          = require('../controllers/submit'),
      showWaiting                               = require('../controllers/admin/showWaiting'),

      { validateDisquette, waitingDisquette }   = require('../models/Disquette')

let router = express.Router()

router
    .get('/', (req, res) => res.redirect('/admin/overview'))

    .get('/overview', authLoggedIn(), getStats, (req, res) => { res.render("admin/layout", {page: "overview"})})
    .get('/list', authLoggedIn(), showList)
    .get('/waiting', authLoggedIn(), showWaiting)

    .get('/submit', authLoggedIn(), (req, res) => { res.render("admin/layout", {page: "submit"})})
    .post('/submit', authLoggedIn(), submitDisquette)

    .get('/disquette/:id', authLoggedIn(), (req, res) =>{})

    .get(notFound)

module.exports = router