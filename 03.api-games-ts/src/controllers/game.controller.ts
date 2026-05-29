import { Request, Response } from "express";
import { getGames } from "../services/game.service";

export const findGames = async ( req: Request, res: Response ) => {
    const games = await getGames();
    res.json(games);
}
