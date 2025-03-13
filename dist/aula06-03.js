//Exercicio 1:
const meuCarro = {
    marca: "Onix",
    modelo: "ret",
    ano: 2020,
    motor: "v8"
};
console.log(meuCarro.ano);
const multiplique = (x, y) => x * y;
console.log(multiplique(10, 5));
//Exercicios 3:
class inverterArray {
    constructor() {
        this.itens = [];
    }
    adicionarItem(item) {
        this.itens.push(item);
    }
    obterItens() {
        return this.itens;
    }
}
const meuinverterArray = new inverterArray();
meuinverterArray.adicionarItem(5);
meuinverterArray.adicionarItem(10);
console.log(meuinverterArray.obterItens());
const MeuinverterArray = new inverterArray();
MeuinverterArray.adicionarItem("Olá");
MeuinverterArray.adicionarItem("Atenção");
console.log(MeuinverterArray.obterItens());
//Exercicio 4:
class Repositorio {
    constructor() {
        this.itens = [];
    }
    salvar(dado) {
        this.itens.push(dado);
    }
    obterTodos() {
        return this.itens;
    }
}
const meuRepositorio = new Repositorio();
meuRepositorio.salvar({ nome: "Gabriel", email: "gabriel@gmail.com" });
console.log(meuRepositorio.obterTodos());
function processarResposta(rs) {
    console.log(`Buscando Tipo de numero: ${rs}`);
}
processarResposta("teste");
const estudante1 = {
    nome: "Carlos",
    curso: "Engenharia",
    empresa: "Itau",
    cargo: "Estagiario"
};
console.log(estudante1);
