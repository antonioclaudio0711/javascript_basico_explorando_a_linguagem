import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(salario, nome, cpf) {
        const bonificacaoDiretor = 2;
        super(salario, nome, cpf, bonificacaoDiretor);
    }
}