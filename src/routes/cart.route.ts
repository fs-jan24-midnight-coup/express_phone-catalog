import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { authMiddleware } from '../middleware/authMiddleware';
// import { authMiddleware } from '../middleware/authMiddleware';

export const router = express.Router();

router.post('/', [authMiddleware], cartController.addItemCart);
router.get('/', [authMiddleware], cartController.getCart);
router.delete('/', [authMiddleware], cartController.deleteCartItem);
router.put('/', [authMiddleware], cartController.changeQuantity);

export default router;