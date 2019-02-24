const _ = require('lodash');

const {albums} = require('../public/files/metallica-albums');

exports.get = (req, res, next) => {

  res.status(200).send({albums: albums});
};

exports.search = (req, res, next) => {
  const filteredAlbums = _.filter(albums, a => a.text.toLowerCase() === req.query.name.toLowerCase());
  res.status(200).send({albums: filteredAlbums});
};



exports.getById = (req, res, next) => {
  res.status(200).send('Requisição recebida com sucesso!');
};

exports.post = (req, res, next) => {
  res.status(201).send('Requisição recebida com sucesso!');
};


exports.put = (req, res, next) => {
  let id = req.params.id;
  res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};