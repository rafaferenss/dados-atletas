class Atleta{
  constructor(nome, idade, peso, altura, notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }
  calculaCategoria(){

  }
  calculaIMC(){

  }
  calculaMediaValida(){

  }
  obtemNomeAtleta(){
    return this.nome
  }
  obtemIdadeAtleta(){
    return this.idade
  }
  obtemPesoAtleta(){
    return this.peso
  }
  obtemNotasAtleta(){
    return this.notas
  }
  obtemCategoria(){
if(this.idade > 8 && this.idade < 12 ){
return "Infantil"}
if(this.idade > 11 && this.idade < 14 ){
return "Juvenil"}
if(this.idade > 13 && this.idade < 16 ){
return "Intermediário"}
if(this.idade > 15 && this.idade < 31 ){
return "Adulto"}
} 
  }
  obtemIMC(){
    return this.peso / (this.altura * this.altura)
  }
  obtemMediaValida(){
    this.notas = this.notas.sort();
     this.notas = this.notas.slice(1, 4);
     var acumulador = 0;
     this.notas.forEach((nota) => {
     acumulador = nota + acumulador;
   });
    let mediaValida = acumulador / this.notas.length;
    return mediaValida;
  }
}
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());
