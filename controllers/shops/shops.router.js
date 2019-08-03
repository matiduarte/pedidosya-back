import express from 'express';
import controller from './shops.controller';

const router = express.Router();

router.get('/', controller.getShops);

export default router;
