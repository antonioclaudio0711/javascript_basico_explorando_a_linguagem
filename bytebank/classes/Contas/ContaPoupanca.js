import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldo, agencia, cliente) {
        const taxaContaPoupanca = 1.0;
        super(saldo, agencia, cliente, taxaContaPoupanca);
    }

    sacar(valorSacado) { 
        return super.sacar(valorSacado, super.taxa);
    }
}