import Photo from '../models/photoModel.js';

const createPhoto = (req, res) => {
  try {
    console.log('REQ Body: ', req.body);
    const photo = Photo.create(req.body);

    res.status(201).json({
      succeded: true,
      photo,
    }); // başarılı!
  } catch (err) {
    res.status(500).json({
      succeded: false,
      err,
    }); // başarılı!
  }
};

const getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({});
    res.status(200).render('photos', {
      photos,
      link: 'photos',
    });
  } catch (err) {
    res.status(500).json({
      succeded: false,
      err,
    }); // başarılı!
  }
};

export { createPhoto, getAllPhotos };
