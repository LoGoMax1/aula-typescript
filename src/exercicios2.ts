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
console.log(multiplicar(10, 7));
console.log(multiplicar(10, 10));

//Exercicios 3:


class inverterArray<T>(array: T[]) {
    return array.reverse();
}

console.log(inverterArray.(["Tamandua", 10, true]))

//Exercicio 4:

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());

//Exercicio 5:

type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}

processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);


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
