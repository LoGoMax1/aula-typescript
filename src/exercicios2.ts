//Exercicio 1:


interface Carros {
    marca: string;
    modelo: string;
    ano: number;
    motor: string;
}

const meuCarro: Carros = {
    marca: "Onix",
    modelo: "ret",
    ano: 2020,
    motor: "v8"
};

console.log(meuCarro.ano);
console.log(meuCarro.marca);
console.log(meuCarro.modelo);
console.log(meuCarro.motor);

//Exercicio 2:


interface Multiplica {
    (a: number, b: number): number;
}
const multiplique: Multiplica = (x, y) => x * y;

console.log(multiplique(10, 5));

//Exercicios 3:


class inverterArray<T> {
    private itens: T[] = [];
    adicionarItem(item: T): void {
        this.itens.push(item);
    }
    obterItens(): T[] {
        return this.itens;
    }
}

const meuinverterArray = new inverterArray<number>();
meuinverterArray.adicionarItem(5);
meuinverterArray.adicionarItem(10);
console.log(meuinverterArray.obterItens()); 
const MeuinverterArray = new inverterArray<string>();
MeuinverterArray.adicionarItem("Olá");
MeuinverterArray.adicionarItem("Atenção");
console.log(MeuinverterArray.obterItens()); 

//Exercicio 4:


class Repositorio<T> {
    private itens: T[] = [];
    salvar(dado: T): void {
        this.itens.push(dado);
    }
    obterTodos(): T[] {
        return this.itens;
    }
}

interface Usuario {
    nome: string
    email: string
}

const meuRepositorio = new Repositorio<Usuario>();
meuRepositorio.salvar({nome: "Gabriel", email: "gabriel@gmail.com"});
console.log(meuRepositorio.obterTodos()); 

//Exercicio 5:


type RespostaServidor = string | boolean;
function processarResposta(rs: RespostaServidor) {
    console.log(`Buscando Tipo de numero: ${rs}`);
}
processarResposta("teste")


//Exercicio 6:

type EstudanteTrabalhador = {
    nome: string;
    curso: string;
};
type Trabalhador  = {
    empresa: string;
    cargo: string;
};
type TrabalhadorDetalhado = EstudanteTrabalhador & Trabalhador;
const estudante1: TrabalhadorDetalhado = {
    nome: "Carlos",
    curso: "Engenharia",
    empresa: "Itau",
    cargo: "Estagiario"
};

console.log(estudante1);
