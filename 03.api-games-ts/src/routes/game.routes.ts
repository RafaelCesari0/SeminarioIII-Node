import { Router } from "express";
import { findGames } from "../controllers/game.controller";

const router = Router();

router.get("/games", findGames);

export default router;