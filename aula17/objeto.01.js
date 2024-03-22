let amigo = {
  Nome: "José",
  sexo: "neutro",
  peso: 84,
  engordar(p = 0) {
    this.peso += p;
    console.log("obeso");
  },
};
amigo.engordar(2)
console.log(`${amigo.Nome} pesa ${amigo.peso}`)