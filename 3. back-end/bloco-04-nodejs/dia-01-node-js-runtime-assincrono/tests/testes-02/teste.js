// const fs = require('fs').promises;

// const nomeDoArquivo = 'meu-arquivo.txt';

// try {
//   const data = fs.readFileSync('meu-arquivo.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.message}`);
//   // console.log(err);
// }

// const fs = require('fs').promises;

// async function main() {
//   try {
//     const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// main()


const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()

