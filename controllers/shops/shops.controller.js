import db from '../../db/response';

export default {
  getShops: (req, res) => {
    const { data } = db;
    console.log(req.query);
    res.json({ data });
  },
};
