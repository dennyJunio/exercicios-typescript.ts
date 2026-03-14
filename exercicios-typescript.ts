// Exercício 1: Calcular IMC
function calcularIMC(peso: number, altura: number): number {
  return peso / (altura * altura);
}

// Exercício 2: Formatar Nome Completo
function formatarNome(nome: string, sobrenome?: string): string {
  if (sobrenome) {
    return `${nome} ${sobrenome}`;
  }
  return nome;
}

// Exercício 3: Verificar Maioridade
function verificarMaioridade(idade: number): boolean {
  return idade >= 18;
}

// Exercício 4: Interface de Produto
interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao?: string; 
}

function formatarProduto(produto: Produto): string {
  let resultado = `Produto [${produto.id}]: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
  if (produto.descricao) {
    resultado += ` (${produto.descricao})`;
  }
  return resultado;
}

// Exercício 5: Filtrar Números Pares
function filtrarPares(numeros: number[]): number[] {
  return numeros.filter(numero => numero % 2 === 0);
}

// Exercício 6: Converter Temperatura
type UnidadeTemperatura = "celsius" | "fahrenheit";

function converterTemperatura(valor: number, unidade: UnidadeTemperatura): number {
  if (unidade === "celsius") {
    return (valor * 9/5) + 32;
  } else {
    return (valor - 32) * 5/9;
  }
}

// Exercício 7: Contar Ocorrências (Genérico)
function contarOcorrencias<T>(array: T[], elemento: T): number {
  return array.filter(item => item === elemento).length;
}

// Exercício 8: Interface de Aluno
interface Aluno {
  nome: string;
  notas: number[];
  matricula: string;
}

function calcularMedia(aluno: Aluno): number {
  if (aluno.notas.length === 0) return 0;
  const soma = aluno.notas.reduce((acumulador, nota) => acumulador + nota, 0);
  return soma / aluno.notas.length;
}

// Exercício 9: Tipo de Resposta de API (Genérico)
type ApiResponse<T> = {
  sucesso: boolean;
  dados: T | null;
  erro: string | null;
};

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

function buscarUsuarios(): ApiResponse<Usuario[]> {
  return {
    sucesso: true,
    dados: [
      { id: 1, nome: "Robertinho", email: "robertinho123@email.com" },
      { id: 2, nome: "MiguelDD", email: "miguelDD@email.com" }
    ],
    erro: null
  };
}