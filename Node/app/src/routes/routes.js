import express from "express";


const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating } from "../controllers/ratings-controller.js";
import { createFavorite, deleteFavorite, getFavorite } from "../controllers/favourite-movie-controller.js";


const router = express.Router();

router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);
router.get(`${API_ROOT}/favourite/:userId/:movieId`, getFavorite);
router.post(`${API_ROOT}/favourite`, createFavorite);
router.delete(`${API_ROOT}/favourite/:id`, deleteFavorite);

export default router;
