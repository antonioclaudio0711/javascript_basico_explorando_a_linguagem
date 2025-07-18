export class Cliente {
    constructor(nomeCliente, cpfCliente) {
        this.#nomeCliente = nomeCliente;
        this.#cpfCliente = cpfCliente;
    }

    #nomeCliente;
    #cpfCliente;

    get nomeCliente() {
        return this.#nomeCliente;
    }

    set nomeCliente(nomeCliente) {
        if (typeof nomeCliente == "string") {
            this.#nomeCliente = nomeCliente;
        }

    }

    get cpfCliente() {
        return this.#cpfCliente;
    }
}