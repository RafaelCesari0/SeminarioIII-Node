import { pool } from "../database/database";

export const findAllGames = async () => {
    const result = await pool.query(
        "SELECT * FROM games"
    );

    return result.rows;
}