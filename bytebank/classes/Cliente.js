export class Cliente {
    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }

    #nome;
    #cpf;
    #senha;

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        if (typeof nome == "string") {
            this.#nome = nome;
        } else {
            console.log("O atributo NOME recebe somente valores literais!");
        }
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        if (typeof cpf == "string") {
            this.#cpf = cpf;
        } else {
            console.log("O atributo CPF recebe somente valores literais!");
        }
    }

    get senha() {
        return this.#senha;
    }

    cadastrarSenha(senha) {
        this.#senha = senha;
    }

    autenticar(senha) {
        return this.#senha == senha;
    }
}