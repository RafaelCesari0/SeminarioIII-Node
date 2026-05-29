import { Request, Response } from "express";
import { createGameService, getGame, getGames, updateGameService } from "../services/game.service";

export const findGames = async (req: Request, res: Response) => {
        const games = await getGames();
        res.json(games);
};

export const findGameByIdController = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        try {
                const game = await getGame(id);
                res.status(200).json(game);
        } catch (error: any) {
                res.status(400).json({ erro: error.message });
        }
};

export const createNewGame = async (req: Request, res: Response) => {
        try {
                const { nome, categoria, nota } = req.body;
                const game = await createGameService(nome, categoria, nota);
                res.status(201).json(game);
        } catch (error: any) {
                res.status(400).json({
                        erro: error.message,
                });
        }
};

export const updateGameController = async (req: Request, res: Response) => {
        try {
                const id = Number(req.params.id);

                const { nome, categoria, nota } = req.body;

                const game = await updateGameService(id, nome, categoria, nota);

                res.json(game);
        } catch (error: any) {
                res.status(400).json({
                        erro: error.message,
                });
        }
};
