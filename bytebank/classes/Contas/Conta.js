import { Cliente } from "../Cliente.js";

// Classe abstrata
export class Conta {
    constructor(saldo, agencia, cliente, taxa) {
        if (this.constructor == Conta) {
            throw new Error("Não instancie um objeto do tipo CONTA!");
        } else if(taxa === undefined) {
            throw new Error("O atributo TAXA é obrigatório!");
        }

        this.#saldo = saldo;
        this.#agencia = agencia;
        this.#cliente = cliente;
        this.#taxa = taxa;
    }

    #saldo;
    #agencia;
    #cliente;
    #taxa;

    get saldo() {
        return this.#saldo;
    }

    get cliente() {
        return this.#cliente;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        } else {
            console.log("O atributo CLIENTE recebe somente instâncias do tipo Cliente!");
        }
    }

    get agencia() {
        return this.#agencia;
    }

    set agencia(agencia) {
        if (typeof agencia == "number") {
            this.#agencia = agencia;
        } else {
            console.log("O atributo AGENCIA recebe somente valores numéricos!");
        }
    }

    get taxa() {
        return this.#taxa;
    }

    sacar(valorSacado, taxa) {
        if (taxa === undefined) {
            throw new Error("O valor da taxa dever ser informado!");
        } else {
            return this.#sacar(valorSacado, taxa);
        }
    }

    #sacar(valorSacado, taxa) {
        valorSacado *= taxa;
        if (this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            return valorSacado;
        } else {
            console.log("A conta não possui saldo suficiente para realizar essa operação!");
            return 0;
        }
    }

    depositar(valorDepositado) {
        if (valorDepositado <= 0) {
            console.log("Valor inválido para realizar um depósito!");
            return;
        }

        this.#saldo += valorDepositado;
    }

    transferir(valorTransferido, conta) {
        const valorSacado = this.sacar(valorTransferido, this.taxa);
        conta.depositar(valorSacado);
    }
}