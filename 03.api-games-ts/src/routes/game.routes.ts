import { Router } from "express";
import { createNewGame, findGameByIdController, findGames, updateGameController } from "../controllers/game.controller";

const router = Router();

router.get("/games", findGames);
router.post("/games", createNewGame);
router.get("/games/:id", findGameByIdController);
router.put("/games/:id", updateGameController);

export default router;
