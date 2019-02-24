const _ = require('lodash');
const BASE_URL = "http://localhost:3000/static/";

const albums = [
  {
    id: 1,
    text: 'And Justice For All',
    image: BASE_URL + 'andjusticeforall.jpg',
    details: {
      "large-image": 'andjusticeforall-large.jpg',
      tracks: [
        {id: 1, title: "Blackened", duration: 38460, composers: 'James Hetfield, Lars Ulrich, Jason Newsted'},
        {id: 2, title: "…And Justice for All" , duration: 56820, composers: "Hetfield, Ulrich, Kirk Hammett"},
      ]
    }
  },
  {
    id: 2,
    text: 'Black Album',
    image: BASE_URL + 'blackalbum.jpg'
  },
  {
    id: 3,
    text: 'Death Magnetic',
    image: BASE_URL + 'deathmagnetic.jpg'
  },
  {
    id: 4,
    text: 'Load',
    image: BASE_URL + 'load.jpg'
  },
  {
    id: 5,
    text: 'Saint Anger Album',
    image: BASE_URL + 'stanger.jpg'
  },
  {
    id: 6,
    text: 'Hardwired To Self Destruct',
    image: BASE_URL + 'hardwiredtoselfdestruct.jpg'
  },
  {
    id: 7,
    text: 'Kill em All Album',
    image: BASE_URL + 'killemall.jpg'
  },
  {
    id: 8,
    text: 'Reload',
    image: BASE_URL + 'reload.jpg'
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