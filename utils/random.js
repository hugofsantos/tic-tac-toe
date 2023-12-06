/**
 * Gera um valor inteiro aleatório entre dois números (Incluindo eles)
 * @param {Number} min limite inferior 
 * @param {Number} max limite superior
 * @returns {Number} Um valor inteiro entre min e max
 */
export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}