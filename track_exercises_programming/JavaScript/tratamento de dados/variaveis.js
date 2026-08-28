var nome = prompt("Qual o seu nome?");
var idade = Number(prompt("Qual a sua idade?"));

if (idade >= 18) {
    alert(`Muito prazer, ${nome}, você possui ${idade} anos.`);
    alert("Parabéns, você já é maior de idade!");
} else {
    alert(`Muito prazer, ${nome}, você possui ${idade} anos.`);
    alert("Infelizmente, você não é maior de idade.");
}