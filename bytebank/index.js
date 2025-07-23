import { Cliente } from "./classes/Cliente.js";
import { Diretor } from "./classes/Funcionarios/Diretor.js";
import { Gerente } from "./classes/Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./classes/SistemaAutenticacao/SistemaAutenticacao.js";

const cliente01 = new Cliente("Antônio Claudio Ferreira Filho", "071.238.561-47");
const cliente02 = new Cliente("Ana Clara de Bessa Ferreira", "071.238.571-19");

cliente01.cadastrarSenha("12345678");
console.log(SistemaAutenticacao.login(cliente01, "12345678"));

// const contaCorrenteCliente01 = new ContaCorrente(1001, cliente01);
// const contaCorrenteCliente02 = new ContaCorrente(1002, cliente02);
// const contaPoupancaCliente01 = new ContaPoupanca(50, 1001, cliente01);

// contaCorrenteCliente01.depositar(500);
// contaCorrenteCliente01.transferir(100, contaCorrenteCliente02);

// contaPoupancaCliente01.depositar(500);
// contaPoupancaCliente01.transferir(300, contaCorrenteCliente02);

// console.log(contaPoupancaCliente01.cliente.nomeCliente);
// console.log(`Saldo conta poupança ${contaPoupancaCliente01.agencia} ---> R$ ${contaPoupancaCliente01.saldo}`);

// console.log(contaCorrenteCliente01.cliente.nomeCliente);
// console.log(`Saldo conta corrente ${contaCorrenteCliente01.agencia} ---> R$ ${contaCorrenteCliente01.saldo}`);

// console.log(contaCorrenteCliente02.cliente.nomeCliente);
// console.log(`Saldo conta corrente ${contaCorrenteCliente02.agencia} ---> R$ ${contaCorrenteCliente02.saldo}`);


const funcionario01 = new Gerente(10000, "Antônio Claudio Ferreira", "613.149.431-20");
const funcionario02 = new Diretor(12000, "Juliana Martins de Bessa Ferreira", "868.844.681-49");

funcionario01.cadastrarSenha("123456");
funcionario02.cadastrarSenha("654321");

console.log(SistemaAutenticacao.login(funcionario01, "123456"));
console.log(SistemaAutenticacao.login(funcionario02, "123456"));

console.log(`Nome do funcionário: ${funcionario01.nome}(CPF: ${funcionario01.cpf}) ---> Bonificação: ${funcionario01.bonificacao}`);
console.log(`Nome do funcionário: ${funcionario02.nome}(CPF: ${funcionario02.cpf}) ---> Bonificação: ${funcionario02.bonificacao}`);