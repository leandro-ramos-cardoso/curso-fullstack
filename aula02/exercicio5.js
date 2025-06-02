const mediaParaAprovacao = 7.0;

const notas = [7.5, 6.0, 7.1];
const media = ((notas[0]+notas[1]+notas[2])/notas.length).toFixed(1);

var statusAprovacao;

if (media <= mediaParaAprovacao) {
    statusAprovacao = "REPROVADO";
} else {
    statusAprovacao = "APROVADO";
}

console.log(`As notas foram: ${notas}`);
console.log(`A média do aluno foi: ${media}`);
console.log(`Portanto, ${statusAprovacao}`);