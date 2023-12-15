import moongose from 'mongoose';

const conn = () => {
  moongose
    .connect(process.env.DB_URL, {
      dbName: 'LensLight',
    })
    .then(() => {
      console.log('Connected to the DB successfully');
    })
    .catch((err) => console.log(`DB Connection err: ${err}`));
};

export default conn;
