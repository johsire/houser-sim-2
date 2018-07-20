const express = require('express');

module.exports = {
  createHouse: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { propertyName, address , city, state, zip } = req.body;

    dbInstance.create_house({ propertyName, address , city, state, zip })
    .then(data => {
      res.status(200).json({
        house: data,
      })
    })
    .catch(err => {
      res.status(500).send({errorMessage: "Oh no! Something went wrong!"});
    });
  }
}