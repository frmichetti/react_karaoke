const albums = [
  {
    text: 'And Justice For All',
    image: './images/andjusticeforall.jpg'
  },
  {
    text: 'Black Album',
    image: './images/blackalbum.jpg'
  },
  {
    text: 'Death Magnetic',
    image: './images/deathmagnetic.jpg'
  },
  {
    text: 'Load',
    image: './images/load.jpg'
  },
  {
    text: 'Saint Anger Album',
    image: './images/stanger.jpg'
  },
  {
    text: 'Hardwired To Self Destruct',
    image: './images/hardwiredtoselfdestruct.jpg'
  },
  {
    text: 'Kill em All Album',
    image: './images/killemall.jpg'
  },
  {
    text: 'Reload',
    image: './images/reload.jpg'
  },
];

exports.get = (req, res, next) => {

  res.status(200).send({albums: albums});
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