export class Funcionario {
    constructor(salario, nome, cpf, bonificacao) {
        if (this.constructor == Funcionario) {
            throw new Error("Não instancie um objeto do tipo FUNCIONARIO!");
        } else if(bonificacao === undefined) {
            throw new Error("O atributo BONIFICACAO é obrigatório!");
        }

        this.#salario = salario;
        this.#nome = nome;
        this.#cpf = cpf;
        this.#bonificacao = bonificacao;
    }

    #salario;
    #nome;
    #cpf;
    #bonificacao;
    #senha;

    get salario() {
        return this.#salario;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (typeof nome == "string") {
            this.#nome = nome;
        } else {
            console.log("O atributo NOME recebe somente valores literais!")
        }
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        if (typeof cpf == "string") {
            this.#cpf = cpf;
        } else {
            console.log("O atributo CPF recebe somente valores literais!")
        }
    }

    get bonificacao() {
        return this.#bonificacao;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
}