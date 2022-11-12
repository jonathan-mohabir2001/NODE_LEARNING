const express = require('express')
exports.home= (req, res) => {
  res.render('home')
}
exports.about = (req, res) => {
  res.render('about')
}