console.log("=== Sistema Typescript ===");

interface Game {
        nome: string;
        categoria: string;
        nota: number;
}

const jogo: Game = {
        nome: "Minecraft",
        categoria: "Sandbox",
        nota: 10,
};

const jogos: Game[] = [
        { nome: "Minecraft", categoria: "Sandbox", nota: 10 },
        { nome: "Resident evil 4", categoria: "Horror", nota: 10 },
];

const nome: string = "Rafael";
const idade: number = 26;
const aprovado: boolean = true;

console.log(`\nNome: ${nome}\tIdade: ${idade}\tAprovado: ${aprovado}\n`);

const calcularMedia = (nota1: number, nota2: number, nota3: number): number => {
        return (nota1 + nota2 + nota3) / 3;
};

const printJogos = (jogos: Game[]) => {
        jogos.forEach((jogo) => {
                console.log(
                        `Nome: ${jogo.nome} Categoria: ${jogo.categoria} Nota: ${jogo.nota}`,
                );
        });
};

const media = calcularMedia(8, 10, 3);

console.log(`A média foi: ${media}\n`);

printJogos(jogos);
