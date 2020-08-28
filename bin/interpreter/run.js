const Lexer = require('../lexer');
const Parser = require('../parser');
const Context = require('./context');
const Interpreter = require('./');
const SymbolTable = require('./symbolTable');

const SWBuiltInFunction = require('./types/built-in-function');
const SWBoolean = require('./types/boolean');
const SWNull = require('./types/null');
const LibFunctions = require('./lib');

/** holds all variables and their values in the global scope */
const globalSymbolTable = new SymbolTable();

// instantiate global constants
globalSymbolTable.setConstant('tupu', SWNull.NULL); // NULL
globalSymbolTable.setConstant('kweli', SWBoolean.TRUE); // TRUE
globalSymbolTable.setConstant('uwongo', SWBoolean.FALSE); // FALSE

// library injection
for (let {
  method: { name },
} of LibFunctions) {
  let fn = name;
  globalSymbolTable.setConstant(fn, new SWBuiltInFunction(fn));
}

/**
 * Processes a file through the lexer, parser and interpreter
 * @param {String} fileName name of file to be processed
 * @param {String} text content of the file
 * @param {Boolean} temp run the program in a temporary isolated scope if true
 * @returns {[String, Error]}
 */
function run(fileName, text, temp = false) {
  // Generate tokens
  const lexer = new Lexer(fileName, text);
  const [tokens, error] = lexer.makeTokens();
  if (error) return [null, error];
  if (tokens.length === 1) return [null, null];

  // Generate abstract syntax tree
  const parser = new Parser(tokens);
  const ast = parser.parse();
  if (ast.error) return [null, ast.error];

  // Run program
  const intr = new Interpreter();
  const context = new Context('<program>');
  context.symbolTable = temp
    ? new SymbolTable(globalSymbolTable)
    : globalSymbolTable;
  const result = intr.visit(ast.node, context);

  return [result.value, result.error];
}

module.exports = run;
