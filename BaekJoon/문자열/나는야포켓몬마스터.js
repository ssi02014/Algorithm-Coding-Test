const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const pokemons = input.slice(1, N + 1);
  const selectPokemons = input.slice(N + 1);
  const result = [];

  const pokemonMap = new Map(pokemons.map((v, i) => [v, i + 1]));

  selectPokemons.forEach((el) => {
    if (!isNaN(parseInt(el))) result.push(pokemons[parseInt(el) - 1]);
    else result.push(pokemonMap.get(el));
  });

  console.log(result.join("\n"));
});
