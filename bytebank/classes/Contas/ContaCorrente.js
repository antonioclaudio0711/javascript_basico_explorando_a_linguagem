import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    constructor(agencia, cliente) {
        const taxaContaCorrente = 1.1;
        super(0, agencia, cliente, taxaContaCorrente);
        ContaCorrente.numeroDeContas += 1;
    }

    static numeroDeContas = 0;
    
    sacar(valorSacado) {
        return super.sacar(valorSacado, super.taxa);
    }
}