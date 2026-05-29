import { createGameRepository, findAllGames, findGameByIdRepository, updateGameRepository } from "../repositories/game.repository";

export const getGames = async () => {
    return await findAllGames();
}

export const getGame = async (id: number) => {
    const game = await findGameByIdRepository(id);

    if (!game) throw new Error("Jogo não encontrado");

    return game;
}

export const createGameService = async (nome: string, categoria: string, nota: number) => {
    if (!nome || !categoria) {
        throw new Error("Nome e categoria são obrigatórios");
    }

    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }

    return await createGameRepository( nome, categoria, nota );
}

export const updateGameService = async (id: number, nome: string, categoria: string, nota: number) => {
    if (!nome || !categoria) {
        throw new Error("Nome e categoria são obrigatórios");
    }

    if (nota < 0 || nota > 10) {
        throw new Error("Nota inválida");
    }

    const game = await findGameByIdRepository(id);

    if (!game) throw new Error("Jogo não encontrado");

    return await updateGameRepository(id, nome, categoria, nota);
}
