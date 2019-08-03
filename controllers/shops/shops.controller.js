import Shops from '../../models';

const mapShops = shop => ({
  name: shop.name,
  logo: shop.logo,
  rating: shop.ratingScore,
  deliveryTimeMinMinutes: shop.deliveryTimeMinMinutes,
  deliveryTimeMaxMinutes: shop.deliveryTimeMaxMinutes,
  paymentMethods: shop.paymentMethodsList.split(','),
});

export default {
  getShops: (req, res) => {
    const { query } = req.query;
    const shops = Shops.search(query);
    res.json({ data: { shops: shops.map(shop => mapShops(shop)) } });
  },
};
