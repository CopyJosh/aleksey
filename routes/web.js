const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/home', {
    message: {
      body: 'Yeaaah!',
      type: 'success'
    },
    title: 'Homepage'
  })
})

/* Contact development page. */
router.get('/development', (req, res) => {
  res.render('pages/development', {
    title: 'Personal Development'
  })
})

/* Contact networking page. */
router.get('/networking', (req, res) => {
  res.render('pages/networking', {
    title: 'Networking Opportunities'
  })
})

/* Contact networking page. */
router.get('/testimonials', (req, res) => {
  res.render('pages/testimonials', {
    title: 'Testimonials'
  })
})

/* Contact about page. */
router.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About'
  })
})

/* Contact contact page. */
router.get('/contact', (req, res) => {
  res.render('pages/contact', {
    message: {
      body: 'Enter a valid email address',
      type: 'danger'
    },
    title: 'Contact'
  })
})

module.exports = router
