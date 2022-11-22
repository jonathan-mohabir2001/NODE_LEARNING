/*
This js file contains handlers for the application. 
*/
const express= require('express')


exports.home =(req, res) => {
  res.render('home.pug')
}
exports.form = (req,res) => {
  res.render('form.pug')
}