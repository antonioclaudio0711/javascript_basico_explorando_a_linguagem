import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    constructor(agencia, cliente) {
        this.#agencia = agencia;
        this.#cliente = cliente;

        ContaCorrente.numeroDeContas += 1;
    }

    // Convenção da comunidade para representar atributos privados: _nomeAtributo
    static numeroDeContas = 0;
    #agencia;
    #cliente;
    #saldo = 0;

    get saldo() {
        return this.#saldo;
    }

    // Não quero que o saldo seja modificado de forma direta, somente com uso dos métodos
    // setSaldo(saldo) {
    //     this.#saldo = saldo;
    // }

    get cliente() {
        return this.#cliente;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente;
        }
    }

    get agencia() {
        return this.#agencia;
    }

    set agencia(agencia) {
        if (typeof agencia == "number") {
            this.#agencia = agencia;
        }
    }

    sacar(valorSacado) {
        if (this.#saldo >= valorSacado) {
            this.#saldo -= valorSacado;
            console.log(`Valor de R$ ${valorSacado} sacado com sucesso!`);
            return valorSacado;
        } else {
            console.log("A conta não possui saldo suficiente para realizar essa operação!");
            return 0;
        }
    }

    depositar(valorDepositado) {
        // if (valorDepositado > 0) {
        //     this.#saldo += valorDepositado;
        // }

        // Técnica de early return para melhorar a legibilidade do código
        if (valorDepositado <= 0) {
            console.log("Valor inválido para realizar um depósito!");
            return;
        }

        this.#saldo += valorDepositado;
        console.log("Depósito realizado com sucesso!");
    }

    transferir(valorTransferido, conta) {
        const valorSacado = this.sacar(valorTransferido);
        conta.depositar(valorSacado);
    }
}