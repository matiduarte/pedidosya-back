/* eslint-env mocha */

import {
  assert, request, use,
} from 'chai';
import chaiHttp from 'chai-http';

const serverInitialize = require('../../bin/server').default;

process.env.BABEL_ENV = 'test';
use(chaiHttp);

const mockShop = {
  name: 'Café Salvo',
  logo: 'https://d1v73nxuzaqxgd.cloudfront.net/restaurants/salvologo.jpg',
  rating: '4.80',
  deliveryTimeMinMinutes: '30',
  deliveryTimeMaxMinutes: '45',
  paymentMethods: [
    'Efectivo',
    'Visa',
    'OCA',
  ],
};

describe('SHOPS CONTROLLER', () => {
  let server = null;
  beforeEach(async () => {
    server = serverInitialize();
  });
  it('should reply with an empty array when nothing has been found',
    async () => new Promise((resolve) => {
      request(server)
        .get('/api/v1/shops?query=esto no existe')
        .end((err, res) => {
          assert.deepEqual(res.body.data.shops, []);
          assert.equal(res.status, 200);
          resolve();
        });
    }));

  it('should reply with a valid object when a shop is found',
    async () => new Promise((resolve) => {
      request(server)
        .get(`/api/v1/shops?query=${mockShop.name}`)
        .end((err, res) => {
          const { shops } = res.body.data;
          assert.deepEqual(shops[0], mockShop);
          assert.equal(res.status, 200);
          resolve();
        });
    }));

  it('should reply with a shops list when it has not parameter',
    async () => new Promise((resolve) => {
      request(server)
        .get(`/api/v1/shops?query=${mockShop.name}`)
        .end((err, res) => {
          const { shops } = res.body.data;
          assert(shops.length > 0);
          assert.equal(res.status, 200);
          resolve();
        });
    }));
});
