import Shops from '../../models';

const mapShops = ({
  name, logo, ratingScore, deliveryTimeMinMinutes,
  deliveryTimeMaxMinutes, paymentMethodsList, cityName, area, discount,
}) => ({
  name,
  logo: `https://d1v73nxuzaqxgd.cloudfront.net/restaurants/${logo}`,
  rating: ratingScore,
  deliveryTimeMinMinutes,
  deliveryTimeMaxMinutes,
  paymentMethods: paymentMethodsList.split(','),
  city: cityName,
  area,
  discount,
});

export default {
  getShops: (req, res) => {
    const { query } = req.query;
    const shops = Shops.search(query);
    res.json({ shops: shops.map(s => mapShops(s)).sort((a, b) => a.name.localeCompare(b.name)) });
  },
};
