/*! *****************************************************************************
O código abaixo tem como objetivo demonstrar como realmente o JavaScript
gerencia a orientação a objetos internamente.

Dicas e sugestões são sempre bem vindas!!!

***************************************************************************** */

console.log('Inicio da execução');
console.log('===============================');

/**
 * Classe App
 */
class App {
  propriedade = 5;

  getPropriedade() {
    return this.propriedade;
  }
}

/**
 * Função equivalente: Classe App
 */
function AppFunc() {
  this.propriedade = 5;
}

AppFunc.prototype.getPropriedade = function () {
  return this.propriedade;
};

const buscaThis = function () {
  return this;
};

App.prototype.buscaThis = buscaThis;

AppFunc.prototype.buscaThis = buscaThis;

debugger;

/**
 * Instancia classe
 */
console.log('Classe');
console.log(new App().buscaThis());

/**
 * Instancia func
 */
console.log('Função');
console.log(new AppFunc().buscaThis());
