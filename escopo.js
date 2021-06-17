/*! *****************************************************************************
O código abaixo tem como objetivo demonstrar que a palavra 'this' se refere ao
contexto de execução do JavaScript.

Dicas e sugestões são sempre bem vindas!!!

***************************************************************************** */

console.log('Inicio da execução');
console.log('===============================');

const escopoJs = function () {
  console.log('Escopo:', this);
  console.log('===============================');
};

/**
 * Chamada simples: Contexto permanece
 */
escopoJs();

/**
 * Chamada call: Contexto é alterado
 */
escopoJs.call({});

/**
 * Chamada através do new: Contexto também é alterado
 */
new escopoJs();

