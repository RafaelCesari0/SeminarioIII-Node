const express = require("express");

const app = express();

app.use(express.json());

console.log("=== API DE GAMES ===");

// Simulaçao de banco de dados
const games = [
        { id: 1, nome: "League of Legends", categoria: "Moba" },
        { id: 2, nome: "Counter Strike", categoria: "FPS" },
        { id: 3, nome: "The Witcher 3: Wild Hunt", categoria: "RPG" },
        { id: 4, nome: "Minecraft", categoria: "Sandbox" },
        { id: 5, nome: "Valorant", categoria: "FPS" },
        { id: 6, nome: "Dota 2", categoria: "Moba" },
        { id: 7, nome: "Resident Evil 4", categoria: "Survival Horror" },
        { id: 8, nome: "FIFA 23", categoria: "Esportes" },
        { id: 9, nome: "Elden Ring", categoria: "Action RPG" },
        { id: 10, nome: "Grand Theft Auto V", categoria: "Ação/Aventura" },
        { id: 11, nome: "Rocket League", categoria: "Esportes" },
        { id: 12, nome: "Cyberpunk 2077", categoria: "RPG" },
];

// Lista todos os jogos
app.get("/games", (req, res) => {
        res.json(games);
});

// Busca jogo especifico
app.get("/games/:nome", (req, res) => {
        const nome = req.params.nome;

        const jogo = games.find((game) => {
                return game.nome.toLowerCase() === nome.toLowerCase();
        });

        res.json(jogo || { erro: "Jogo não encontrado" });
});

// Cadastra novo jogo
app.post("/games", (req, res) => {
        const novoJogo = req.body;

        games.push(novoJogo);

        console.log("Novo jogo adicionado: " + req.body.nome);

        res.json({
                mensagem: "Jogo cadastrado",
                jogo: novoJogo,
        });
});

// Atualiza um jogo
app.put("/games/:id", (req, res) => {
        const id = Number(req.params.id);

        const jogo = games.find((game) => game.id === id);

        if (!jogo) {
                return res.json({
                        erro: "Jogo não encontrado",
                });
        }

        jogo.nome = req.body.nome;
        jogo.categoria = req.body.categoria;

        res.json({
                mensagem: "Jogo atualizado",
                jogo,
        });
});

// Deleta um jogo
app.delete("/games/:id", (req, res) => {
        const id = Number(req.params.id);

        const index = games.findIndex((game) => game.id === id);

        if (index === -1) {
                return res.json({
                        erro: "Jogo não encontrado",
                });
        }

        games.splice(index, 1);

        res.json({
                mensagem: "Jogo removido",
        });
});

//Inicia servidor
app.listen(3000, () => {
        console.log("Servidor rodando em http://localhost:3000");
});
