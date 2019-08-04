import Shops from '../../models';

const mapShops = ({
  name, logo, ratingScore, deliveryTimeMinMinutes, deliveryTimeMaxMinutes, paymentMethodsList,
}) => ({
  name,
  logo: `https://d1v73nxuzaqxgd.cloudfront.net/restaurants/${logo}`,
  rating: ratingScore,
  deliveryTimeMinMinutes,
  deliveryTimeMaxMinutes,
  paymentMethods: paymentMethodsList.split(','),
});

export default {
  getShops: (req, res) => {
    const { query } = req.query;
    const shops = Shops.search(query);
    res.json({ data: { shops: shops.map(shop => mapShops(shop)) } });
  },
};
