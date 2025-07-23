import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor(salario, nome, cpf) {
        const bonificacaoGerente = 1.1;
        super(salario, nome, cpf, bonificacaoGerente);
    }
}