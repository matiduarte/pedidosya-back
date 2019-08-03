import express from 'express';

import shopRoutes from './shops/shops.router';

const router = express.Router();

router.use('/api/v1/shops', shopRoutes);

export default router;
