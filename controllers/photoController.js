import Photo from '../models/photoModel.js';

const createPhoto = (req, res) => {
  console.log('REQ Body: ', req.body);
  const photo = Photo.create(req.body);

  res.status(201).json({
    succeded: true,
    photo,
  }); // başarılı!
};

export { createPhoto };
