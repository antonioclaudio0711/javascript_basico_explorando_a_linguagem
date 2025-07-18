import { Cliente } from "./classes/Cliente.js";
import { ContaCorrente } from "./classes/ContaCorrente.js";

const cliente01 = new Cliente("Antônio Claudio Ferreira Filho", "071.238.561-47");
const cliente02 = new Cliente("Ana Clara de Bessa Ferreira", "071.238.571-19");

const contaCorrenteCliente02 = new ContaCorrente(1002, cliente02);
const contaCorrenteCliente01 = new ContaCorrente(1001, cliente01);

contaCorrenteCliente01.depositar(500);
contaCorrenteCliente01.transferir(300, contaCorrenteCliente02);

console.log(contaCorrenteCliente01.cliente.nomeCliente);
console.log(`Saldo conta corrente ${contaCorrenteCliente01.agencia} ---> R$ ${contaCorrenteCliente01.saldo}`);

console.log(contaCorrenteCliente02.cliente.nomeCliente);
console.log(`Saldo conta corrente ${contaCorrenteCliente02.agencia} ---> R$ ${contaCorrenteCliente02.saldo}`);

console.log(`Número de contas criadas: ${ContaCorrente.numeroDeContas}`)