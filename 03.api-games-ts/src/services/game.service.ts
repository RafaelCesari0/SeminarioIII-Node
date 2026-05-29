import { findAllGames } from "../repositories/game.repository";

export const getGames = async () => {
    return await findAllGames();
}