const _ = require('lodash');

const albums = [
  {
    id: 1,
    text: 'And Justice For All',
    image: './images/andjusticeforall.jpg'
  },
  {
    id: 2,
    text: 'Black Album',
    image: './images/blackalbum.jpg'
  },
  {
    id: 3,
    text: 'Death Magnetic',
    image: './images/deathmagnetic.jpg'
  },
  {
    id: 4,
    text: 'Load',
    image: './images/load.jpg'
  },
  {
    id: 5,
    text: 'Saint Anger Album',
    image: './images/stanger.jpg'
  },
  {
    id: 6,
    text: 'Hardwired To Self Destruct',
    image: './images/hardwiredtoselfdestruct.jpg'
  },
  {
    id: 7,
    text: 'Kill em All Album',
    image: './images/killemall.jpg'
  },
  {
    id: 8,
    text: 'Reload',
    image: './images/reload.jpg'
  },
];

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