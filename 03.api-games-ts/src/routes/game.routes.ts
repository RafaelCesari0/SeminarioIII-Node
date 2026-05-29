import { Router } from "express";
import { createNewGame, deleteGameController, findGameByIdController, findGames, updateGameController } from "../controllers/game.controller";

const router = Router();

router.get("/games", findGames);
router.post("/games", createNewGame);
router.get("/games/:id", findGameByIdController);
router.put("/games/:id", updateGameController);
router.delete("/games/:id", deleteGameController);

export default router;
